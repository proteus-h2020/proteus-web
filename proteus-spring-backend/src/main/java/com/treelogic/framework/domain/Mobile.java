package com.treelogic.framework.domain;

import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.treelogic.framework.advice.ExcludeFieldsAdvice;

@Document
@JsonFilter(ExcludeFieldsAdvice.FILTER_NAME)
public class Mobile extends EntityTimestamp {

	private GeoJsonPoint location;

	public GeoJsonPoint getLocation() {
		return location;
	}

	public void setLocation(GeoJsonPoint location) {
		this.location = location;
	}
}