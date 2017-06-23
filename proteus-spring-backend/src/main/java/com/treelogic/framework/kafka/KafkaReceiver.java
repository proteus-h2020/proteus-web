package com.treelogic.framework.kafka;

import java.util.Timer;
import java.util.TimerTask;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;

import com.treelogic.framework.domain.ProteusJsonizableRecord;
import com.treelogic.framework.domain.MomentsResult;
import com.treelogic.framework.domain.SAXResult;
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

	private PublishSubject<ProteusJsonizableRecord> subjectRealtime = PublishSubject.create();
	private PublishSubject<ProteusJsonizableRecord> subjectMoments = PublishSubject.create();
	private PublishSubject<ProteusJsonizableRecord> subjectSAX = PublishSubject.create();

	private SensorMeasurement lastSensorMeasurement;
	private MomentsResult lastMomentResult;
	private SAXResult lastSAXResult;

	private static volatile long messageCounter = 0;
	private static volatile long momentsMessageCounter = 0;
	private static volatile long realTimeMessageCounter = 0;
	private static volatile long saxMessageCounter = 0;

	public KafkaReceiver() {
		LOGGER.info("Initializing KafkaReceiver");
	}

	@PostConstruct
	public void initializeUpdaterTask() {
		Timer time = new Timer();
		TimerTask st = new TimerTask() {

			@Override
			public void run() {
				messageCounter = momentsMessageCounter + realTimeMessageCounter + saxMessageCounter;
				app.update(messageCounter, lastMomentResult, lastSensorMeasurement, lastSAXResult);
			}
		};

		time.schedule(st, appUpdateDelay, appUpdateInterval);

	}

	public PublishSubject<ProteusJsonizableRecord> realtime() {
		return this.subjectRealtime;
	}

	public PublishSubject<ProteusJsonizableRecord> moments() {
		return this.subjectMoments;
	}

	public PublishSubject<ProteusJsonizableRecord> sax() {
		return this.subjectSAX;
	}

	@KafkaListener(topics = "${kafka.topicName}")
	public void receive(SensorMeasurement measure) {
		realTimeMessageCounter++;
		this.lastSensorMeasurement = measure;
		this.subjectRealtime.onNext(measure);
	}

	@KafkaListener(topics = "${kafka.topicNameSAX}")
	public void receiveSAX(SAXResult saxPrediction) {
		saxMessageCounter++;
		this.lastSAXResult = saxPrediction;
		this.subjectSAX.onNext(saxPrediction);

	}

	@KafkaListener(topics = "${kafka.topicNameMoments}")
	public void receiveMoments(MomentsResult moment) {
		momentsMessageCounter++;
		this.lastMomentResult = moment;
		moment.setStdDeviation(Math.sqrt(moment.getVariance())); // TODO: remove
																	// trick
		this.subjectMoments.onNext(moment);
	}
}
