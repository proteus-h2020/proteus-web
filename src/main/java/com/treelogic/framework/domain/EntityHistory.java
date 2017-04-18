package com.treelogic.framework.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.treelogic.framework.advice.ExcludeFieldsAdvice;

@Document
@JsonFilter(ExcludeFieldsAdvice.FILTER_NAME)
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