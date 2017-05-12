package com.treelogic.framework.kafka;

import java.util.concurrent.CountDownLatch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;

public class KafkaReceiver {

	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaReceiver.class);

	private CountDownLatch latch = new CountDownLatch(1);
	
	
	public KafkaReceiver(){
		LOGGER.info("Initializing KafkaReceiver");
	}

	public CountDownLatch getLatch() {
		return latch;
	}

	@KafkaListener(topics = "${kafka.topicName}")
	public void receive(String message) {
		//LOGGER.info("received message='{}'", message);
		latch.countDown();
	}
}
