package com.treelogic.framework.repository;

import java.util.List;
import java.util.Map;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;

import rx.Observable;

public interface ProteusHistoricalRecordRepositoryCustom {

	List<Integer> findAllCoilIDs();
	
	List<ProteusHistoricalRecord> findByCoilIdAndProteusRealtimeVarId(int coilid, int varid);
	
	List<ProteusRealtimeRecord> findProteusRealTimeByCoilId(int coilid);
	
	List<ProteusRealtimeRecord> findProteusRealTimeByCoilIdVarId(int coilid, int varid);

	List<ProteusHistoricalRecord.ProteusSimpleMoment> findProteusCalculationsByCoilIdVarId(int coilid, int varid);

	Observable<Map<String, Object>> findProteusHSMByCoilIdsVars(int[] coilids, String[] hsmVars);
	
	List<String> findAllHSMvars();

	Observable<ProteusRealtimeRecord> findProteusRealtimeStream(int coilid);

}
