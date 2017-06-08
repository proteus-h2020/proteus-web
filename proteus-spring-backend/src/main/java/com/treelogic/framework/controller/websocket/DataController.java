package com.treelogic.framework.controller.websocket;

import java.util.List;
import javax.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.treelogic.framework.domain.MomentsResult;
import com.treelogic.framework.domain.SensorMeasurement;
import com.treelogic.framework.kafka.KafkaReceiver;
import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

@Controller
@Configuration
public class DataController {

	@Value("${websocket.topic.realtime}")
	private String TOPIC_REALTIME_TEMPLATE;

	@Value("${websocket.topic.flink}")
	private String TOPIC_MOMENTS_REALTIME;

	@Value("${websocket.buffer.interval.ms}")
	private int BUFFER_INTERVAL;

	private static final Logger LOGGER = LoggerFactory.getLogger(DataController.class);

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@Autowired
	private KafkaReceiver realtimeReceiver;

	public DataController() {
	}

	@PostConstruct
	public void initializeKafkaListener() {
		realtimeReceiver.realtime().subscribe(new KafkaRealtimeObserver());

		// .buffer(BUFFER_INTERVAL, TimeUnit.MILLISECONDS)
		// .buffer(5).subscribe(new KafkaObserver());

		realtimeReceiver.moments().subscribe(new KafkaMomentObserver());
		// .buffer(BUFFER_INTERVAL, TimeUnit.MILLISECONDS)
		// .buffer(30).subscribe(new KafkaMomentsObserver());
		// .groupBy(new MomentsGrouper()).buffer(1).subscribe(new
		// MomentsConsumer());

	}

	private void sendRealtimeMeasure(SensorMeasurement measure) {
		String topic = String.format(TOPIC_REALTIME_TEMPLATE, measure.getVarName());
		//LOGGER.info("Sending {} to  {}", measure.toJson(), topic);

		this.simpMessagingTemplate.convertAndSend(topic, measure);
	}

	private void sendRealtimeMeasures(List<SensorMeasurement> measures) {
		// TODO: FIX topic name, group by var id
		if (measures == null || measures.size() == 0) {
			return;
		}
		for (SensorMeasurement s : measures) {
			this.sendRealtimeMeasure(s);
		}
	}

	private void sendMoment(MomentsResult moment) {
		String topic = String.format(TOPIC_MOMENTS_REALTIME, moment.getVarId());
		String json = moment.toJson();
		//LOGGER.info("Sending {} to  {}", json, topic);
		this.simpMessagingTemplate.convertAndSend(topic, json);
	}

	private void sendMoments(List<MomentsResult> moments) {
		// TODO: FIX topic name, group by var id
		if (moments == null || moments.size() == 0) {
			return;
		}
		for (MomentsResult m : moments) {
			this.sendMoment(m);
		}
	}


	private class KafkaRealtimeObserver implements Observer<SensorMeasurement> {

		@Override
		public void onSubscribe(Disposable d) {
			LOGGER.debug("New subscription =  {}", d);
		}

		@Override
		public void onNext(SensorMeasurement measure) {
			// LOGGER.info("Sending new value to the frontend = {}", measures);
			sendRealtimeMeasure(measure);
		}

		@Override
		public void onError(Throwable e) {
			LOGGER.error("An error occurred with kafka Observable = {}", e.getMessage());
		}

		@Override
		public void onComplete() {
			LOGGER.warn("The streaming ended");
		}

	}

	private class KafkaObserver implements Observer<List<SensorMeasurement>> {

		@Override
		public void onSubscribe(Disposable d) {
			LOGGER.debug("New subscription =  {}", d);
		}

		@Override
		public void onNext(List<SensorMeasurement> measures) {
			// LOGGER.info("Sending new value to the frontend = {}", measures);
			sendRealtimeMeasures(measures);
		}

		@Override
		public void onError(Throwable e) {
			LOGGER.error("An error occurred with kafka Observable = {}", e.getMessage());
		}

		@Override
		public void onComplete() {
			LOGGER.warn("The streaming ended");
		}

	}

	private class KafkaMomentsObserver implements Observer<List<MomentsResult>> {

		@Override
		public void onSubscribe(Disposable d) {
			LOGGER.debug("New subscription =  {}", d);
		}

		@Override
		public void onNext(List<MomentsResult> measures) {
			// LOGGER.info("Sending new value to the frontend = {}", measures);
			sendMoments(measures);
		}

		@Override
		public void onError(Throwable e) {
			LOGGER.error("An error occurred with kafka Observable = {}", e.getMessage());
		}

		@Override
		public void onComplete() {
			LOGGER.warn("The streaming ended");
		}

	}

	private class KafkaMomentObserver implements Observer<MomentsResult> {

		@Override
		public void onSubscribe(Disposable d) {
			LOGGER.debug("New subscription =  {}", d);
		}

		@Override
		public void onNext(MomentsResult measures) {
			// LOGGER.info("Sending new value to the frontend = {}", measures);
			sendMoment(measures);
		}

		@Override
		public void onError(Throwable e) {
			LOGGER.error("An error occurred with kafka Observable = {}", e.getMessage());
		}

		@Override
		public void onComplete() {
			LOGGER.warn("The streaming ended");
		}

	}

}
