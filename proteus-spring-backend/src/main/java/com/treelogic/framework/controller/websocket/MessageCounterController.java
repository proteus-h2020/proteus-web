package com.treelogic.framework.controller.websocket;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.treelogic.framework.domain.Pair;
import com.treelogic.framework.service.ProteusAppService;

import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

@Controller
@Configuration
public class MessageCounterController {

	@Autowired
	private ProteusAppService app;

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@Value("${websocket.topic.messageCounter}")
	private String TOPIC_MESSAGE_COUNTER;

	private static final Logger LOGGER = LoggerFactory.getLogger(MessageCounterController.class);

	public MessageCounterController() {
	}

	private void sendMessageCounter(Pair<String, Long> pair) {
		this.simpMessagingTemplate.convertAndSend(TOPIC_MESSAGE_COUNTER, pair);
	}

	@PostConstruct
	public void initializeMessageCounterListener() {
		this.app.messageCounterChanges().subscribe(new Observer<Pair<String, Long>>() {
			@Override
			public void onSubscribe(Disposable d) {
			}

			@Override
			public void onNext(Pair<String, Long> pair) {
				LOGGER.debug("New message counter {}", pair.getValue());
				sendMessageCounter(pair);
			}

			@Override
			public void onError(Throwable e) {
			}

			@Override
			public void onComplete() {
			}
		});
	}

	@MessageMapping("/get/messages")
	public void messagesInfo() throws Exception {
		long counter = this.app.getData().getCounter();
		this.sendMessageCounter(new Pair<String, Long>("messageCounter", counter));
	}
}
