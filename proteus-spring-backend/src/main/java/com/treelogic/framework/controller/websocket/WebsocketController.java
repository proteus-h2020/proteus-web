package com.treelogic.framework.controller.websocket;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import com.treelogic.framework.domain.SensorMeasurementMapper;
import com.treelogic.framework.kafka.KafkaReceiver;

import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

@Controller
public class WebsocketController {
	
	private final static String TOPIC_REALTIME = "/topic/realtime";
	private final static int BUFFER_SIZE = 5;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(WebsocketController.class);

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;
	
	
	@Autowired
	public WebsocketController(final KafkaReceiver receiver){
		new Runnable() {
			@Override
			public void run() {
				receiver
					.listener()
					.map(new SensorMeasurementMapper())
					.buffer(1, TimeUnit.SECONDS)
					.subscribe(new KafkaObserver());
			}
		}.run();
	}

	private void send(List<String> measures){
		this.simpMessagingTemplate.convertAndSend(TOPIC_REALTIME, measures);
	}

	private class KafkaObserver implements Observer<List<String>>{

		@Override
		public void onSubscribe(Disposable d) {
			LOGGER.debug("New subscription =  {}", d);			
		}

		@Override
		public void onNext(List<String> measure) {
			LOGGER.debug("Sending new value to the frontend =  {}", measure);
			send(measure);
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
