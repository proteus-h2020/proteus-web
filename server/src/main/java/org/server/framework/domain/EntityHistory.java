package org.server.framework.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFilter;

@Document
@JsonFilter(org.server.framework.advice.ExcludeFieldsAdvice.FILTER_NAME)
public class EntityHistory {

	@Id
	private String id;

	private EntityTimestamp entity;

	public String getId() {
		return id;
	}

	public EntityTimestamp getEntity() {
		return entity;
	}

	public void setEntity(EntityTimestamp entity) {
		this.entity = entity;
	}
}