package com.treelogic.framework.domain;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public abstract class ProteusJsonizableRecord {
	
	protected int coilId;
	protected int varId;
	
	private static ObjectMapper mapper = new ObjectMapper();

	public String toJson() {
		try {
			return mapper.writeValueAsString(this);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String toJson(List<ProteusJsonizableRecord> instances) {
		try {
			return mapper.writeValueAsString(instances);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}

	public int getCoilId() {
		return coilId;
	}

	public void setCoilId(int coilId) {
		this.coilId = coilId;
	}

	public int getVarId() {
		return varId;
	}

	public void setVarId(int varId) {
		this.varId = varId;
	}
	
	
}
