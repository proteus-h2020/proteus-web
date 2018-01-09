package com.treelogic.framework.domain;



public abstract class MomentsResult extends ProteusJsonizableRecord {
	

	protected double mean;
	protected double variance;
	protected double counter;
	protected double stdDeviation;
	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(counter);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(mean);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(stdDeviation);
		result = prime * result + (int) (temp ^ (temp >>> 32));
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
		if (Double.doubleToLongBits(counter) != Double.doubleToLongBits(other.counter))
			return false;
		if (Double.doubleToLongBits(mean) != Double.doubleToLongBits(other.mean))
			return false;
		if (Double.doubleToLongBits(stdDeviation) != Double.doubleToLongBits(other.stdDeviation))
			return false;
		if (Double.doubleToLongBits(variance) != Double.doubleToLongBits(other.variance))
			return false;
		return true;
	}

	public double getStdDeviation() {
		return stdDeviation;
	}

	public void setStdDeviation(double stdDeviation) {
		this.stdDeviation = stdDeviation;
	}

	public double getMean() {
		return mean;
	}

	public void setMean(double mean) {
		this.mean = mean;
	}

	public double getVariance() {
		return variance;
	}

	public void setVariance(double variance) {
		this.variance = variance;
	}

	public double getCounter() {
		return counter;
	}

	public void setCounter(double counter) {
		this.counter = counter;
	}
	

}
