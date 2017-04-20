package org.server.framework.advice;

import java.util.Locale;

import org.server.framework.exception.FailedLoginException;
import org.server.framework.exception.ProfileNotFoundException;
import org.server.framework.service.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;




@ControllerAdvice
public class ErrorHandlerAdvice {

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private ErrorService errorService;

	// Custom exceptions
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<?> handleConverterException(HttpMessageNotReadableException exception, Locale locale) {
		HttpError httpError = errorService.badRequest();
		if (exception.getMostSpecificCause() instanceof InvalidFormatException) {
			InvalidFormatException formatException = (InvalidFormatException) exception.getCause();
			String[] fieldData = formatException.getPathReference().split("\\\"");
			String field = fieldData[fieldData.length - 2];
			String fieldType = formatException.getTargetType().getSimpleName();
			String fieldValue = formatException.getValue().toString();
			String message = messageSource.getMessage("validation.converter.error",
					new String[] { fieldType, fieldValue, field }, locale);
			httpError.setMessage(message.toString());
		} else {
			httpError.setMessage(exception.getMessage());
		}
		return ResponseEntity.badRequest().body(httpError);
	}

	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ExceptionHandler(FailedLoginException.class)
	public void failedToLogin() {

	}

	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(ProfileNotFoundException.class)
	public void profileNotFound() {

	}

}