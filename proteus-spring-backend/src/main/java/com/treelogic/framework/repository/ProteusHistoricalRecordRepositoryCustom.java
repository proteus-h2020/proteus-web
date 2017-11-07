package com.treelogic.framework.repository;

import java.util.List;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;

public interface ProteusHistoricalRecordRepositoryCustom {

	List<Integer> findKeys();
	
	public List<ProteusHistoricalRecord> findByCoilIdAndProteusRealtimeVarId(int coilid, int varid);

}
