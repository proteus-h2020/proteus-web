package com.treelogic.framework.domain;

import com.treelogic.framework.domain.tuples.Tuple3;

import io.reactivex.functions.Function;

public class ProteusJsonizableRecordMapper implements Function<ProteusJsonizableRecord, Tuple3<Integer, Integer, String>> {

	@Override
	public Tuple3<Integer, Integer, String> apply(ProteusJsonizableRecord t) throws Exception {
		return new Tuple3<Integer, Integer, String>(t.getCoilId(),t.getVarId(), t.toJson());
	}

}
