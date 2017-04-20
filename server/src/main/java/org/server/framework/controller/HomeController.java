package org.server.framework.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(path = "/app")
public class HomeController {


    @Autowired
    public HomeController() {
    }

    @RequestMapping(
        path = "/",
        method = RequestMethod.GET
    )
    public String app() throws Exception {
    	return "test";
    }
}
