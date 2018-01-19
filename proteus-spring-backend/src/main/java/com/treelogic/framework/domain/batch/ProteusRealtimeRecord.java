package com.treelogic.framework.domain.batch;


public class ProteusRealtimeRecord {
	private double value;
	private int varId;
	private double x;
	private Double y;
	
	public ProteusRealtimeRecord() {}
	
	public ProteusRealtimeRecord(double x, Double y, int varId, double value){
		this.x = x;
		this.y = y;
		this.varId = varId;
		this.value = value;
	}

	public double getValue() {
		return value;
	}

	public int getVarId() {
		return varId;
	}

	public double getX() {
		return x;
	}

	public Double getY() {
		return y;
	}

}