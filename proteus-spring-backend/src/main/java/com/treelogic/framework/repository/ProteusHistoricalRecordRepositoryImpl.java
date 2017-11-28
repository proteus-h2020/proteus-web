package com.treelogic.framework.repository;

import static com.couchbase.client.java.query.Select.select;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.couchbase.core.CouchbaseTemplate;
import org.springframework.data.couchbase.repository.query.support.N1qlUtils;

import com.couchbase.client.java.query.AsyncN1qlQueryResult;
import com.couchbase.client.java.query.AsyncN1qlQueryRow;
import com.couchbase.client.java.query.N1qlQuery;
import com.couchbase.client.java.query.Statement;
import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.batch.ProteusHistoricalRecord.ProteusSimpleMoment;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;

import rx.Observable;
import rx.functions.Func1;

public class ProteusHistoricalRecordRepositoryImpl implements ProteusHistoricalRecordRepositoryCustom {

	@Autowired
	private CouchbaseTemplate template;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ProteusHistoricalRecordRepositoryImpl.class);

	
	@Override
	public List<Integer> findKeys() {
		String bucketName = this.template.getCouchbaseBucket().name();

		String query = String.format("select META(`%1$s`).id AS _ID, META(`%1$s`).cas AS _CAS from `%1$s`", bucketName);
		
		List<Integer> keys = new ArrayList<>();

		List<Map<String, Object>> results = template.getCouchbaseBucket()
				.async()
				.query(N1qlQuery.simple(query))
				.flatMap(new MapperQueryRows())
				.map(new MapperHashMap())
				.toList()
				.timeout(10, TimeUnit.SECONDS)
				.toBlocking()
				.single();

		for (Map<String, Object> r : results) {
			keys.add(Integer.valueOf(r.get("_ID").toString()));
		}

		return keys;
	}

	@Override
	public List<ProteusHistoricalRecord> findByCoilIdAndProteusRealtimeVarId(int coilid, int varid) {
		String bucketName = this.template.getCouchbaseBucket().name();

		Statement query = N1qlUtils
				.createSelectClauseForEntity(bucketName)
				.from(bucketName)
				.useKeysValues(String.valueOf(coilid))
				.unnest("`proteus-realtime`").as("rt")
				.where(String.format("rt.varId = %d ", varid));

		return template.findByN1QL(N1qlQuery.simple(query), ProteusHistoricalRecord.class);
	}

	@Override
	public List<ProteusRealtimeRecord> findProteusRealTimeByCoilId(int coilid) {
		Statement query = select("  META(`proteus`).id AS _ID, META(`proteus`).cas AS _CAS, rt.varId as varId, rt.x as x, rt.y as y, rt.`value` as `value`")
				.from(this.template.getCouchbaseBucket().name())
				.useKeysValues(String.valueOf(coilid))
				.unnest("proteus.`proteus-realtime` rt");

		return template.findByN1QL(N1qlQuery.simple(query), ProteusRealtimeRecord.class);
	}
	
	@Override
	public List<ProteusRealtimeRecord> findProteusRealTimeByCoilIdVarId(int coilid, int varid) {
		Statement query = select("  META(`proteus`).id AS _ID, META(`proteus`).cas AS _CAS, rt.varId as varId, rt.x as x, rt.y as y, rt.`value` as `value`")
				.from(this.template.getCouchbaseBucket().name())
				.useKeysValues(String.valueOf(coilid))
				.unnest("proteus.`proteus-realtime` rt")
				.where(String.format("rt.varId = %d ", varid));

		return template.findByN1QL(N1qlQuery.simple(query), ProteusRealtimeRecord.class);
	}

	@Override
	public List<ProteusSimpleMoment> findProteusCalculationsByCoilId(int coilid) {
		String selectStr = "META(`proteus`).id AS _ID, META(`proteus`).cas AS _CAS, sm.x as x, sm.y as y, sm.varId as varId, " +
				"sm.mean as mean, sm.stdDeviation as stdDeviation, sm.variance as variance, sm.counter as counter";

		Statement query = select(selectStr)
				.from(this.template.getCouchbaseBucket().name())
				.useKeysValues(String.valueOf(coilid))
				.unnest("proteus.`simple-moments` sm");

		return template.findByN1QL(N1qlQuery.simple(query), ProteusHistoricalRecord.ProteusSimpleMoment.class);
	}

	@Override
	public List<Map<String, Object>> findProteusHSMByCoilId(int[] coilid) {

        Statement query = select("META(`proteus`).id AS coilId ,proteus.`proteus-hsm`")
                .from(this.template.getCouchbaseBucket().name())
				.useKeysValues(integerArrayToStringArray(coilid));

        return template.getCouchbaseBucket()
                .async()
                .query(N1qlQuery.simple(query))
                .flatMap(new MapperQueryRows())
                .map(new MapperHashMap())
                .toList()
                .timeout(10, TimeUnit.SECONDS)
                .toBlocking()
                .single();
	}

	@Override
	public Observable<ProteusRealtimeRecord> findProteusRealtimeStream(int coilid) {
		
		int varid = 4;
		Statement query = N1qlUtils
				.createSelectClauseForEntity(this.template.getCouchbaseBucket().name())
				.from(this.template.getCouchbaseBucket().name())
				.useKeysValues(String.valueOf(coilid))
				.unnest("`proteus-realtime`").as("rt")
				.where(String.format("rt.varId = %d ", varid));
		
		
//		Statement query = select("  META(`proteus`).id AS _ID, META(`proteus`).cas AS _CAS, rt.varId as varId, rt.x as x, rt.y as y, rt.`value` as `value`")				
//				.from(this.template.getCouchbaseBucket().name())
//				.useKeysValues(String.valueOf(coilid))
//				.unnest("proteus.`proteus-realtime` rt");

		return template.getCouchbaseBucket()
				.async()
				.query(query)
				.flatMap(new MapperQueryRows())
				.map(new ProteusRealtimeRecordMapper());
	}
	
	private class MapperQueryRows implements Func1<AsyncN1qlQueryResult, Observable<AsyncN1qlQueryRow>> {

		@Override
		public Observable<AsyncN1qlQueryRow> call(AsyncN1qlQueryResult asyncN1qlQueryResult) {
			return asyncN1qlQueryResult.rows();
		}
	}

	private class ProteusRealtimeRecordMapper implements Func1<AsyncN1qlQueryRow, ProteusRealtimeRecord> {

		@Override
		public ProteusRealtimeRecord call(AsyncN1qlQueryRow asyncN1qlQueryRow) {

			double value = (asyncN1qlQueryRow.value().get("value") != null) ? (Double) asyncN1qlQueryRow.value().get("value"): null;
			int varId = (asyncN1qlQueryRow.value().get("varId") != null) ? (Integer) asyncN1qlQueryRow.value().get("varId"): null;
			Double x = (asyncN1qlQueryRow.value().get("x") != null) ? (Double) asyncN1qlQueryRow.value().get("x"): null;
			Double y = null;
			if (asyncN1qlQueryRow.value().size() > 3) {
				y = (asyncN1qlQueryRow.value().get("y") != null) ? (Double) asyncN1qlQueryRow.value().get("y"): null;
			}

			return new ProteusRealtimeRecord(x,y, varId, value);
		}
	}
	private class MapperHashMap implements Func1<AsyncN1qlQueryRow, Map<String, Object>> {

		@Override
		public Map<String, Object> call(AsyncN1qlQueryRow asyncN1qlQueryRow) {
			return asyncN1qlQueryRow.value().toMap();
		}
	}

	private String[] integerArrayToStringArray(int[] coilid) {
		Arrays.sort(coilid);
		return Arrays.toString(coilid).split("[\\[\\]]")[1].split(", ");

		//return Arrays.stream(coilid).mapToObj(Integer::toString).toArray(String[]::new);
	}

	
	

}
