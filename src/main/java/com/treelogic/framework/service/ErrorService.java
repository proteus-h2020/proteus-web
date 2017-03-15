package com.treelogic.framework.service;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.treelogic.framework.advice.HttpError;

@Service
public class ErrorService {

	@Autowired
	private MessageSource messageSource;

	public HttpError badRequest() {
		return badRequest(null);
	}

	public HttpError badRequest(String message) {
		HttpError httpError = new HttpError();
		httpError.setStatus(HttpStatus.BAD_REQUEST.value());
		httpError.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
		httpError.setMessage(message);
		return httpError;
	}

	public HttpError badRequestNotFound(Class<?> entity, Locale locale) {
		return badRequest(
				messageSource.getMessage("badrequest.not_found", new String[] { entity.getSimpleName() }, locale));
	}
}