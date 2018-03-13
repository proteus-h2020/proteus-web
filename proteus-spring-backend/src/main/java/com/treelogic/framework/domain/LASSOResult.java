package com.treelogic.framework.domain;

public class LASSOResult extends ProteusJsonizableRecord{

	private double label;
	private double x;
	

	public LASSOResult(int coil, int var, double label, double x) {
		this.coilId = coil;
		this.varId = var;		
		this.label = label;
		this.x = x;
		
	}	

	public double getLabel() {
		return label;
	}

	public void setLabel(double label) {
		this.label = label;
	}

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	@Override
	public String toString() {
		return "LASSOResult [coilId=" + coilId + ", varId=" + this.varId + ", label=" + label + ", x=" + x + "]";
	}

}
