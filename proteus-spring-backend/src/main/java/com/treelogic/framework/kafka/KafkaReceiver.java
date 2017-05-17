package com.treelogic.framework.kafka;

import java.util.concurrent.CountDownLatch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;

import com.treelogic.framework.domain.SensorMeasurement;

import io.reactivex.subjects.PublishSubject;


public class KafkaReceiver {

	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaReceiver.class);
	
	private PublishSubject<SensorMeasurement> subject = PublishSubject.create();
	
	private CountDownLatch latch = new CountDownLatch(1);
	
	
	public KafkaReceiver(){
		LOGGER.info("Initializing KafkaReceiver");
	}

	public CountDownLatch getLatch() {
		return latch;
	}

	public PublishSubject<SensorMeasurement> listener(){
		return this.subject;
	}
	
	@KafkaListener(topics = "${kafka.topicName}")
	public void receive(SensorMeasurement measure) {
		this.subject.onNext(measure);
		latch.countDown();
	}
}
