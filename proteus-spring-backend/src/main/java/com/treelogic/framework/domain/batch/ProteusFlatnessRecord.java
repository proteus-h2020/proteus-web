package com.treelogic.framework.domain.batch;


public class ProteusFlatnessRecord {
	private double value;
	private int varId;
	private double x;
	private Double y;
	
	public ProteusFlatnessRecord() {
	}

	public ProteusFlatnessRecord(double value, int varId, double x, Double y) {
		this.value = value;
		this.varId = varId;
		this.x = x;
		this.y = y;
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