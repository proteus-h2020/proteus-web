package com.treelogic.framework.domain;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotNull;

import org.springframework.data.mongodb.core.geo.GeoJsonMultiLineString;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.treelogic.framework.advice.ExcludeFieldsAdvice;

@Document
@JsonFilter(ExcludeFieldsAdvice.FILTER_NAME)
// Subqueries only work on embebed entities
public class Mission extends EntityTimestamp {

	public enum MissionStatus {
		REGISTERED, IN_PROGRESS, ACCOMPLISHED, NOT_ACCOMPLISHED;
	}

	private Mobile leader;

	@NotNull
	private MissionStatus status;

	private String description;

	private GeoJsonPoint origin;

	private GeoJsonPoint destination;

	private GeoJsonMultiLineString route;

	private Long startDate;

	private Long endDate;

	private Set<Asset> assets = new HashSet<Asset>();

	private Set<Mobile> mobiles = new HashSet<Mobile>();

	public Mobile getLeader() {
		return leader;
	}

	public void setLeader(Mobile leader) {
		this.leader = leader;
	}

	public MissionStatus getStatus() {
		return status;
	}

	public void setStatus(MissionStatus status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public GeoJsonPoint getOrigin() {
		return origin;
	}

	public void setOrigin(GeoJsonPoint origin) {
		this.origin = origin;
	}

	public GeoJsonPoint getDestination() {
		return destination;
	}

	public void setDestination(GeoJsonPoint destination) {
		this.destination = destination;
	}

	public GeoJsonMultiLineString getRoute() {
		return route;
	}

	public void setRoute(GeoJsonMultiLineString route) {
		this.route = route;
	}

	public Long getStartDate() {
		return startDate;
	}

	public void setStartDate(Long startDate) {
		this.startDate = startDate;
	}

	public Long getEndDate() {
		return endDate;
	}

	public void setEndDate(Long endDate) {
		this.endDate = endDate;
	}

	public Set<Asset> getAssets() {
		return assets;
	}

	public void setAssets(Set<Asset> assets) {
		this.assets = assets;
	}

	public Set<Mobile> getMobiles() {
		return mobiles;
	}

	public void setMobiles(Set<Mobile> mobiles) {
		this.mobiles = mobiles;
	}
}