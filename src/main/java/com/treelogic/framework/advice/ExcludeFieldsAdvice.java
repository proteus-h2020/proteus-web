package com.treelogic.framework.advice;

import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.AbstractMappingJacksonResponseBodyAdvice;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

@ControllerAdvice
public class ExcludeFieldsAdvice extends AbstractMappingJacksonResponseBodyAdvice {

	public static final String FILTER_NAME = "excludeFilter";

	@Override
	protected void beforeBodyWriteInternal(MappingJacksonValue bodyContainer, MediaType contentType,
			MethodParameter returnType, ServerHttpRequest request, ServerHttpResponse response) {
		ServletServerHttpRequest servletRequest = (ServletServerHttpRequest) request;
		String excludeParam = servletRequest.getServletRequest().getParameter("exclude");
		String[] excludeFields = StringUtils.hasText(excludeParam) ? excludeParam.split(",") : new String[] {};
		FilterProvider filters = new SimpleFilterProvider().addFilter(FILTER_NAME,
				SimpleBeanPropertyFilter.serializeAllExcept(excludeFields));
		bodyContainer.setFilters(filters);
	}
}