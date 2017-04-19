package org.server.framework.controller;

import org.server.framework.domain.LoginCredentials;
import org.server.framework.domain.Profile;
import org.server.framework.exception.FailedLoginException;
import org.server.framework.service.JwtService;
import org.server.framework.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "/login")
public class LoginController {
	
	public static final String PATH = "/login";

    private final LoginService loginService;
    private final JwtService jwtService;

    @Autowired
    public LoginController(LoginService loginService, JwtService jwtService) {
        this.loginService = loginService;
        this.jwtService = jwtService;
    }

    @RequestMapping(path = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Profile login(@RequestBody LoginCredentials credentials, HttpServletResponse response) {
        return loginService.login(credentials)
                .map(profile -> {
                    try {
                        response.setHeader("Token", jwtService.tokenFor(profile));
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                    return profile;
                }).orElseThrow(() -> new FailedLoginException(credentials.getUsername()));
    }
}
