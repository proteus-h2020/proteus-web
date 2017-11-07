package com.treelogic.framework.domain;


public abstract class SensorMeasurement extends ProteusJsonizableRecord{

	protected double value;
	protected byte type;
	protected double x;

	public SensorMeasurement() {
		if( this.getClass() == SensorMeasurement2D.class){
			this.type = 0x1;
		}
		else{
			this.type = 0x0;
		}
	}

	public double getValue() {
		return value;
	}

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public void setValue(double value) {
		this.value = value;
	}

	public byte getType() {
		return type;
	}

	public void setType(byte type) {
		this.type = type;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + type;
		long temp;
		temp = Double.doubleToLongBits(value);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(x);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SensorMeasurement other = (SensorMeasurement) obj;
		if (type != other.type)
			return false;
		if (Double.doubleToLongBits(value) != Double.doubleToLongBits(other.value))
			return false;
		if (Double.doubleToLongBits(x) != Double.doubleToLongBits(other.x))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "SensorMeasurement [value=" + value + ", type=" + type + ", x=" + x + "]";
	}
	
	

}