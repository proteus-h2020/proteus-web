package com.treelogic.framework.reactive;

import java.util.List;
import java.util.Map;

import com.treelogic.framework.domain.batch.ProteusFlatnessRecord;
import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.batch.ProteusHistoricalRecord.ProteusSimpleMoment;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;

import rx.Observable;

public class IncrementalHistoricalRecordFlow {
	
	private ProteusHistoricalRecord record;
	
	private final int bufferSize;
	
	
	public IncrementalHistoricalRecordFlow(ProteusHistoricalRecord record, int  bufferSize){
		this.record = record;
		this.bufferSize = bufferSize;
	}
	
	public Observable<List<ProteusRealtimeRecord>> startFlow(){
		if(this.record == null){
			throw new IllegalArgumentException("record cannot be null");
		}
		
		ProteusFlatnessRecord[] flatness = record.getProteusFlatness();
		ProteusRealtimeRecord[] realtime = record.getProteusRealtime();
		Map<String, Object> hsm = record.getProteusHSM();
		ProteusSimpleMoment[] moments = record.getCalculations();
		
		return Observable.from(realtime).buffer(this.bufferSize);
	}
	

}
