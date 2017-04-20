package org.server.framework.domain;

import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonFilter;

@Document
@JsonFilter(org.server.framework.advice.ExcludeFieldsAdvice.FILTER_NAME)
public class Mobile extends EntityTimestamp {

	private GeoJsonPoint location;

	public GeoJsonPoint getLocation() {
		return location;
	}

	public void setLocation(GeoJsonPoint location) {
		this.location = location;
	}
}