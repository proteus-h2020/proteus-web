package org.server.framework.domain;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFilter;

@Document
@JsonFilter(org.server.framework.advice.ExcludeFieldsAdvice.FILTER_NAME)
public class MobileHistory extends EntityHistory {

}