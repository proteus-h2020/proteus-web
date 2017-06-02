package com.treelogic.framework.domain;

import io.reactivex.functions.Function;

public class MomentsGrouper implements Function<MomentsResult, Integer> {

	@Override
	public Integer apply(MomentsResult m) throws Exception {
		return m.getVarId();
	}

}
