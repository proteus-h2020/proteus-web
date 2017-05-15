package com.treelogic.framework.controller.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebsocketController {

	// @MessageMapping("/hello")
	// @SendTo("/topic/greetings")
	// public Greeting greeting(HelloMessage message) throws Exception {
	// Thread.sleep(1000); // simulated delay
	// return new Greeting("Hello, " + message.getName() + "!");
	// }
	
	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public String handle() {
		return "{\"content\":\"ok\"}";
	}

}
