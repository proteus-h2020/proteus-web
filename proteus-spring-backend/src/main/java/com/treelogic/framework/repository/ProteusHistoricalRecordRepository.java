package com.treelogic.framework.repository;


import org.springframework.data.repository.CrudRepository;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;

public interface ProteusHistoricalRecordRepository extends 
	CrudRepository<ProteusHistoricalRecord, Integer>,
	ProteusHistoricalRecordRepositoryCustom{
	
	//public ProteusHistoricalRecord findByCoilIdAndProteusRealtimeVarId(int coilid, int varid);
}
