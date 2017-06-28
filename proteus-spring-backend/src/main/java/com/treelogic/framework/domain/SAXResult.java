package com.treelogic.framework.domain;

public class SAXResult extends ProteusJsonizableRecord{

	private String classId;
	private double similarity;
	private double x1;
	private double x2;

	public SAXResult(int coil, int var, String classId, double similirity, double x1, double x2) {
		this.coilId = coil;
		this.varId = var;
		this.classId = classId;
		this.similarity = similirity;
		this.x1 = x1;
		this.x2 = x2;
	}

	public String getClassId() {
		return classId;
	}

	public void setClassId(String classId) {
		this.classId = classId;
	}

	public double getSimilarity() {
		return similarity;
	}

	public void setSimilarity(double similarity) {
		this.similarity = similarity;
	}

	public double getX1() {
		return x1;
	}

	public void setX1(double x1) {
		this.x1 = x1;
	}

	public double getX2() {
		return x2;
	}

	public void setX2(double x2) {
		this.x2 = x2;
	}

	@Override
	public String toString() {
		return "SAXResult [coilId=" + coilId + ", varId=" + this.varId + ", classId=" + classId + ", similarity="
				+ similarity + ", x1=" + x1 + ", x2=" + x2 + "]";
	}

}
