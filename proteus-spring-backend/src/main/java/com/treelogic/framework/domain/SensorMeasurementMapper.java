package com.treelogic.framework.domain;

import io.reactivex.functions.Function;

public class SensorMeasurementMapper implements Function<SensorMeasurement, String> {

	@Override
	public String apply(SensorMeasurement t) throws Exception {
		return t.toJson();
	}

}
