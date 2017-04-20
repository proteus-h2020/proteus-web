package org.server.framework.domain;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.server.framework.advice.ExcludeFieldsAdvice;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.util.StringUtils;

import com.fasterxml.jackson.annotation.JsonFilter;

@Document
@JsonFilter(ExcludeFieldsAdvice.FILTER_NAME)
public class Asset extends EntityTimestamp {

	public enum AssetStatus {
		ON_TRANSIT, DELIVERED, NOT_DELIVERED;
	}

	public enum AssetReason {
		LOST, STOLEN, DAMAGED;
	}

	public enum AssetType {
		FOOD, NFI, CRI;
	}

	private String qrId;

	@NotNull
	private AssetType type;

	@NotNull
	private AssetStatus status;

	private AssetReason reason;

	private String description;

	@Min(0)
	@Max(10)
	@NotNull
	private Integer priority;

	private Integer volume;

	private Integer weight;

	private GeoJsonPoint location;

	private Long loadingMilliseconds;

	public String getQrId() {
		return qrId;
	}

	public void setQrId(String qrId) {
		this.qrId = qrId;
	}

	public AssetType getType() {
		return type;
	}

	public void setType(AssetType type) {
		this.type = type;
	}

	public AssetStatus getStatus() {
		return status;
	}

	public void setStatus(AssetStatus status) {
		this.status = status;
	}

	public AssetReason getReason() {
		return reason;
	}

	public void setReason(AssetReason reason) {
		this.reason = reason;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getPriority() {
		return priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	public Integer getVolume() {
		return volume;
	}

	public void setVolume(Integer volume) {
		this.volume = volume;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public GeoJsonPoint getLocation() {
		return location;
	}

	public void setLocation(GeoJsonPoint location) {
		this.location = location;
	}

	public Long getLoadingMilliseconds() {
		return loadingMilliseconds;
	}

	public void setLoadingMilliseconds(Long loadingMilliseconds) {
		this.loadingMilliseconds = loadingMilliseconds;
	}

	@Override
	public boolean equals(Object o) {
		if (o == null)
			return false;
		if (!(o instanceof Asset))
			return false;

		Asset asset = (Asset) o;
		return StringUtils.hasLength(qrId) && StringUtils.hasLength(asset.getQrId()) && qrId.equals(asset.getQrId());
	}

	@Override
	public final int hashCode() {
		return new StringBuilder(this.getClass().getCanonicalName()).append(qrId).toString().hashCode();
	}
}