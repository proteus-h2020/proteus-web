package org.server.framework.domain;

import org.server.framework.advice.ExcludeFieldsAdvice;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFilter;

@Document
@JsonFilter(ExcludeFieldsAdvice.FILTER_NAME)
public class MissionHistory extends EntityHistory {

}