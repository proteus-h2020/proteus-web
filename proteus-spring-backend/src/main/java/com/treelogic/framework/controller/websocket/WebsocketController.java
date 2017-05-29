package com.treelogic.framework.controller.websocket;

import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.treelogic.framework.domain.SensorMeasurement;
import com.treelogic.framework.kafka.KafkaReceiver;

import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

@Controller
@Configuration
public class WebsocketController {

	@Value("${websocket.topic.realtime}")
	private String TOPIC_REALTIME_TEMPLATE;

	@Value("${websocket.buffer.interval.ms}")
	private int BUFFER_INTERVAL;

	private static final Logger LOGGER = LoggerFactory.getLogger(WebsocketController.class);

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	private KafkaReceiver receiver;

	@Autowired
	public WebsocketController(final KafkaReceiver receiver) {
		this.receiver = receiver;
	}

	@PostConstruct
	public void initializeKafkaListener() {
		receiver
			.listener()
			//.buffer(BUFFER_INTERVAL, TimeUnit.MILLISECONDS)
			.buffer(1)
			.subscribe(new KafkaObserver());
	}

	private void send(List<SensorMeasurement> measures) {
		// TODO: FIX topic name, group by var id
		if (measures == null || measures.size() == 0) {
			return;
		}
		String topic = String.format(TOPIC_REALTIME_TEMPLATE, measures.get(0).getVarName());
		LOGGER.debug("SEnding to {}", topic);
		this.simpMessagingTemplate.convertAndSend(topic, measures);
	}

	private class KafkaObserver implements Observer<List<SensorMeasurement>> {

		@Override
		public void onSubscribe(Disposable d) {
			LOGGER.debug("New subscription =  {}", d);
		}

		@Override
		public void onNext(List<SensorMeasurement> measures) {
			LOGGER.info("Sending new value to the frontend =  {}", measures);
			send(measures);
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
