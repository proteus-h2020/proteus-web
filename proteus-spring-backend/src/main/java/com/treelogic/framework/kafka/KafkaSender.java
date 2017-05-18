package com.treelogic.framework.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;

import com.treelogic.framework.domain.SensorMeasurement;

public class KafkaSender {

	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaSender.class);

	@Autowired
	private KafkaTemplate<String, SensorMeasurement> kafkaTemplate;

	public void send(String topic, final SensorMeasurement message) {
		// the KafkaTemplate provides asynchronous send methods returning a
		// Future
		ListenableFuture<SendResult<String, SensorMeasurement>> future = kafkaTemplate.send(topic, message);

		// register a callback with the listener to receive the result of the
		// send asynchronously
		future.addCallback(new ListenableFutureCallback<SendResult<String, SensorMeasurement>>() {

			@Override
			public void onSuccess(SendResult<String, SensorMeasurement> result) {
				LOGGER.info("sent message='{}' with offset={}", message, result.getRecordMetadata().offset());
			}

			@Override
			public void onFailure(Throwable ex) {
				LOGGER.error("unable to send message='{}'", message, ex);
			}
		});

		// or, to block the sending thread to await the result, invoke the
		// future's get() method
	}
}