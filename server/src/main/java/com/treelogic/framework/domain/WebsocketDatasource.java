package com.treelogic.framework.domain;

import javax.validation.constraints.NotNull;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.treelogic.framework.advice.ExcludeFieldsAdvice;

@Document
@JsonFilter(ExcludeFieldsAdvice.FILTER_NAME)
public class WebsocketDatasource extends Datasource {

	@NotNull
	private String wsEndpoint;

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((wsEndpoint == null) ? 0 : wsEndpoint.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		WebsocketDatasource other = (WebsocketDatasource) obj;
		if (wsEndpoint == null) {
			if (other.wsEndpoint != null)
				return false;
		} else if (!wsEndpoint.equals(other.wsEndpoint))
			return false;
		return true;
	}

	public String getWsEndpoint() {
		return wsEndpoint;
	}

	public void setWsEndpoint(String wsEndpoint) {
		this.wsEndpoint = wsEndpoint;
	}
	
	
}
