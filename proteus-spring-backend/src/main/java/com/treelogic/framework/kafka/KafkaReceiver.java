package com.treelogic.framework.kafka;

import java.util.Timer;
import java.util.TimerTask;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;

import com.treelogic.framework.domain.MomentsResult;
import com.treelogic.framework.domain.SensorMeasurement;
import com.treelogic.framework.service.ProteusAppService;

import io.reactivex.subjects.PublishSubject;

public class KafkaReceiver {

	@Value("${app.update.interval.ms}")
	private int appUpdateInterval;
	
	@Value("${app.update.delay.ms}")
	private int appUpdateDelay;
	
	@Autowired
	private ProteusAppService app;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaReceiver.class);

	private PublishSubject<SensorMeasurement> subjectRealtime = PublishSubject.create();
	private PublishSubject<MomentsResult> subjectMoments = PublishSubject.create();

	private SensorMeasurement lastSensorMeasurement;
	private MomentsResult lastMomentResult;
	
	private static volatile long messageCounter = 0;
	private static volatile long momentsMessageCounter = 0;
	private static volatile long realTimeMessageCounter = 0;

	public KafkaReceiver() {
		LOGGER.info("Initializing KafkaReceiver");
	}
	
	@PostConstruct
	public void initializeUpdaterTask(){
		Timer time = new Timer(); // Instantiate Timer Object
		TimerTask st = new TimerTask() {
			
			@Override
			public void run() {
				messageCounter = momentsMessageCounter + realTimeMessageCounter;
				app.update(messageCounter, lastMomentResult, lastSensorMeasurement);
			}
		};
		
		time.schedule(st, appUpdateDelay, appUpdateInterval);

		
	}

	public PublishSubject<SensorMeasurement> realtime() {
		return this.subjectRealtime;
	}

	public PublishSubject<MomentsResult> moments() {
		return this.subjectMoments;
	}

	@KafkaListener(topics = "${kafka.topicName}")
	public void receive(SensorMeasurement measure) {
		realTimeMessageCounter++;
		this.lastSensorMeasurement = measure;
		this.subjectRealtime.onNext(measure);
	}

	@KafkaListener(topics = "${kafka.topicNameMoments}")
	public void receiveMoments(MomentsResult moment) {
		momentsMessageCounter++;
		this.lastMomentResult = moment;
		moment.setStdDeviation(Math.sqrt(moment.getVariance())); //TODO: remove trick
		this.subjectMoments.onNext(moment);
	}
}
