package com.treelogic.framework.domain;

public abstract class MomentsResult {
	
	protected int coilId;
	protected int varId;
	protected double mean;
	protected double variance;
	protected double counter;
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + coilId;
		long temp;
		temp = Double.doubleToLongBits(counter);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(mean);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + varId;
		temp = Double.doubleToLongBits(variance);
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
		MomentsResult other = (MomentsResult) obj;
		if (coilId != other.coilId)
			return false;
		if (Double.doubleToLongBits(counter) != Double.doubleToLongBits(other.counter))
			return false;
		if (Double.doubleToLongBits(mean) != Double.doubleToLongBits(other.mean))
			return false;
		if (varId != other.varId)
			return false;
		if (Double.doubleToLongBits(variance) != Double.doubleToLongBits(other.variance))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "MomentsResult [coilId=" + coilId + ", varId=" + varId + ", mean=" + mean + ", variance=" + variance
				+ ", counter=" + counter + "]";
	}
 
	 
}
