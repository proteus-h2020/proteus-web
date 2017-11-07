package com.treelogic.framework.repository;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.couchbase.core.CouchbaseTemplate;

import com.couchbase.client.java.query.N1qlQuery;
import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;

public class ProteusHistoricalRecordRepositoryImpl implements ProteusHistoricalRecordRepositoryCustom {

	@Autowired
	private CouchbaseTemplate template;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ProteusHistoricalRecordRepositoryImpl.class);

	
	@Override
	public List<Integer> findKeys() {
		String bucketName = this.template.getCouchbaseBucket().name();
	
		String query = String.format("select `%s.coilID` from `%s`", bucketName, bucketName);
		N1qlQuery queryIDs = N1qlQuery.simple(query);
		
		return template.findByN1QL(queryIDs, Integer.class);
	}

	@Override
	public List<ProteusHistoricalRecord> findByCoilIdAndProteusRealtimeVarId(int coilid, int varid) {
		String bucketName = this.template.getCouchbaseBucket().name();
		
		String query = String.format("select * from `%s` where coilId = %d", bucketName, coilid);
		N1qlQuery queryIDs = N1qlQuery.simple(query);
		
		return template.findByN1QL(queryIDs, ProteusHistoricalRecord.class);
	}
	

}
