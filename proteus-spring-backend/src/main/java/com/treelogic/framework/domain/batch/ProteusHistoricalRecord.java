package com.treelogic.framework.domain.batch;

import java.util.Arrays;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;

import com.couchbase.client.java.repository.annotation.Field;

@Document
public class ProteusHistoricalRecord {

	@Id
	private int coilId;

	@Field(value = "proteus-flatness")
	private ProteusFlatnessRecord[] proteusFlatness;

	@Field(value = "proteus-realtime")
	private ProteusRealtimeRecord[] proteusRealtime;
	
	@Field(value = "calculations")
	private ProteusSimpleMoment [] calculations;

	@Field(value = "proteus-hsm")
	private Map<String, Object> proteusHSM;

	public ProteusHistoricalRecord() {
	}

	public ProteusHistoricalRecord(int coilID) {
		this.coilId = coilID;
	}

	public class ProteusSimpleMoment{
		private int counter;
		private double mean;
		private double stdDeviation;
		private int varId;
		private double variance;
		private double x;
		private double y;
		
		public ProteusSimpleMoment() {
		}
		
		public int getCounter() {
			return counter;
		}
		public double getMean() {
			return mean;
		}
		public double getStdDeviation() {
			return stdDeviation;
		}
		public int getVarId() {
			return varId;
		}
		public double getVariance() {
			return variance;
		}
		public double getX() {
			return x;
		}
		public double getY() {
			return y;
		}
		
	}
		@Override
	public String toString() {
		return "ProteusHistoricalRecord [coilId=" + coilId + ", proteusFlatness=" + Arrays.toString(proteusFlatness)
				+ ", proteusRealtime=" + Arrays.toString(proteusRealtime) + ", proteusHSMRecord=" + (proteusHSM) + "]";
	}

	public int getCoilId() {
		return coilId;
	}

	public ProteusFlatnessRecord[] getProteusFlatness() {
		return proteusFlatness;
	}

	public ProteusRealtimeRecord[] getProteusRealtime() {
		return proteusRealtime;
	}

	public Map<String, Object> getProteusHSM() {
		return proteusHSM;
	}

	public ProteusSimpleMoment[] getCalculations() {
		return calculations;
	}

	public void setProteusFlatness(ProteusFlatnessRecord[] proteusFlatness) {
		this.proteusFlatness = proteusFlatness;
	}

	public void setProteusRealtime(ProteusRealtimeRecord[] proteusRealtime) {
		this.proteusRealtime = proteusRealtime;
	}

	public void setCalculations(ProteusSimpleMoment[] calculations) {
		this.calculations = calculations;
	}

	public void setProteusHSM(Map<String, Object> proteusHSM) {
		this.proteusHSM = proteusHSM;
	}
	
	

}
