package org.server.framework.domain;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.util.StringUtils;

@Document
public class EntityTimestamp {

	@Id
	private String id;

	// TODO Test it
	@CreatedDate
	private Long createdDate;

	// TODO Test it
	@LastModifiedDate
	private Long lastModifiedDate;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Long getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Long createdDate) {
		this.createdDate = createdDate;
	}

	public Long getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(Long lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	@Override
	public boolean equals(Object o) {
		if (o == null)
			return false;
		if (!(o instanceof EntityTimestamp))
			return false;

		EntityTimestamp asset = (EntityTimestamp) o;
		return StringUtils.hasLength(id) && StringUtils.hasLength(asset.getId()) && id.equals(asset.getId());
	}

	@Override
	public int hashCode() {
		return new StringBuilder(this.getClass().getCanonicalName()).append(id).toString().hashCode();
	}

}