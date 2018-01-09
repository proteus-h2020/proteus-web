package com.treelogic.framework.domain;
public class SensorMeasurement1D extends SensorMeasurement {


	public SensorMeasurement1D(){}
	
    public SensorMeasurement1D(int coilId, double x, int variableIdentifier, double value){
        super();
        this.coilId = coilId;
        this.x = x;
        this.varId = variableIdentifier;
        this.value = value;
    }
   

}