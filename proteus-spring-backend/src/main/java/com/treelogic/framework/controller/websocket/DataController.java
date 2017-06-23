package com.treelogic.framework.controller.websocket;

import java.security.InvalidParameterException;
import javax.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import com.treelogic.framework.domain.ProteusJsonizableRecord;
import com.treelogic.framework.domain.ProteusJsonizableRecordMapper;
import com.treelogic.framework.domain.tuples.Tuple3;
import com.treelogic.framework.kafka.KafkaReceiver;
import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Function;

@Controller
@Configuration
public class DataController {

	@Value("${websocket.topic.realtime}")
	private String TOPIC_REALTIME_TEMPLATE;

	@Value("${websocket.topic.flink}")
	private String TOPIC_MOMENTS_REALTIME;

	@Value("${websocket.topic.flink.sax}")
	private String TOPIC_SAX_REALTIME;

	@Value("${websocket.buffer.interval.ms}")
	private int BUFFER_INTERVAL;

	private static final Logger LOGGER = LoggerFactory.getLogger(DataController.class);

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@Autowired
	private KafkaReceiver realtimeReceiver;

	public DataController() {
	}
	
	/**
	 * Initialize observers for listening changes on data. 
	 */
	@PostConstruct
	public void initializeKafkaListener() {
		Function<ProteusJsonizableRecord, Tuple3<Integer, Integer, String>> mapper = new ProteusJsonizableRecordMapper();

		realtimeReceiver.realtime().map(mapper).subscribe(new KafkaValuesObserver(TOPIC_REALTIME_TEMPLATE));

		realtimeReceiver.moments().map(mapper).subscribe(new KafkaValuesObserver(TOPIC_MOMENTS_REALTIME));

		realtimeReceiver.sax().map(mapper).subscribe(new KafkaValuesObserver(TOPIC_SAX_REALTIME));

	}

	/**
	 * Send a JSON value to a given websocket endpoint
	 * @param json JSON value
	 * @param wsEndpoint Websocket path
	 */
	private void send(String json, String wsEndpoint) {
		this.simpMessagingTemplate.convertAndSend(wsEndpoint,json);
	}
	
	/**
	 * A custom observer that takes values from kafka and forwards them to a given websocket endpoint
	 *
	 */
	private class KafkaValuesObserver implements Observer<Tuple3<Integer, Integer, String>> {

		private String websocketEndpoint;

		public KafkaValuesObserver(String websocketEndpoint) {
			this.websocketEndpoint = websocketEndpoint;
		}

		@Override
		public void onSubscribe(Disposable d) {
			LOGGER.debug("New subscription =  {}", d);
		}

		@Override
		public void onNext(Tuple3<Integer, Integer, String> tuple) {
			int varId = tuple.getT2();
			String json = tuple.getT3();
			String endpoint = null;

			if (this.websocketEndpoint.equals(TOPIC_MOMENTS_REALTIME)) {
				endpoint = String.format(TOPIC_MOMENTS_REALTIME, varId);
			} else if (this.websocketEndpoint.equals(TOPIC_REALTIME_TEMPLATE)) {
				endpoint = String.format(TOPIC_REALTIME_TEMPLATE, varId);
			} else if (this.websocketEndpoint.equals(TOPIC_SAX_REALTIME)) {
				endpoint = TOPIC_SAX_REALTIME;
			} else {
				throw new InvalidParameterException("Invalid websocket endpoint: " + this.websocketEndpoint);
			}
			send(json, endpoint);
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
