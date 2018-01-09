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
public class CoilController {

	@Autowired
	private ProteusAppService app;

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;
	
	@Value("${websocket.topic.coil}")
	private String TOPIC_COIL_REALTIME;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CoilController.class);

	
	public CoilController() {
	}
	
	
	private void sendCoilChangeNotification(Pair<String, Integer> pair){
		this.simpMessagingTemplate.convertAndSend(TOPIC_COIL_REALTIME, pair);
	}

	@PostConstruct
	public void initializeCoilListener() {
		this.app.coilChanges().subscribe(new Observer<Pair<String, Integer>>() {

			@Override
			public void onSubscribe(Disposable d) {
			}

			@Override
			public void onNext(Pair<String, Integer> pair) {
				
				//LOGGER.info("New Coil notification {}" , pair.getValue());
				sendCoilChangeNotification(pair);
			}

			@Override
			public void onError(Throwable e) {			
			}

			@Override
			public void onComplete() {
			}
		});
	}

	@MessageMapping("/get/coil")
	public void coilInfo() throws Exception {
		int coil = this.app.getData().getCoilId();
		this.sendCoilChangeNotification(new Pair<String, Integer>("coilId", coil));
	}

}
