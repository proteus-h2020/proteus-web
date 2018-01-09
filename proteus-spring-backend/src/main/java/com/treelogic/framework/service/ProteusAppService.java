package com.treelogic.framework.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.treelogic.framework.domain.MomentsResult;
import com.treelogic.framework.domain.Pair;
import com.treelogic.framework.domain.ProteusAppData;
import com.treelogic.framework.domain.SAXResult;
import com.treelogic.framework.domain.SensorMeasurement;

import io.reactivex.subjects.PublishSubject;

public class ProteusAppService {

	private ProteusAppData data = new ProteusAppData();

	private static final Logger LOGGER = LoggerFactory.getLogger(ProteusAppService.class);

	private PublishSubject<Pair<String, Integer>> coilSubject = PublishSubject.create();
	private PublishSubject<Pair<String, Long>> messageCounterSubject = PublishSubject.create();

	public void update(long counter, MomentsResult moment, SensorMeasurement sensor, SAXResult saxResult) {
		LOGGER.debug("Updating app data...");
		this.updateMessageCounter(counter);
		if (moment != null) {
			this.updateCoilId(moment.getCoilId());
			this.updateMomentsCounter(moment.getCounter());
		}
		if (sensor != null) {
			this.updateCurrentX(sensor.getX());
		}
	}

	public ProteusAppData getData() {
		return this.data;
	}
	
	private void updateMessageCounter(long counter){
		this.data.setCounter(counter);
		this.messageCounterSubject.onNext(new Pair<String, Long>("messageCounter", counter));
	}

	private void updateCurrentX(double x) {
		if (x != data.getCoilId()) {
			data.setCurrentX(x);
		}
	}

	private void updateCoilId(int coilId) {
		if (coilId != data.getCoilId()) {
			this.coilSubject.onNext(new Pair<String, Integer>("coilId", coilId));
			data.setCoilId(coilId);
		}
	}

	private void updateMomentsCounter(double counter) {
		if (counter != data.getMomentsCounter()) {
			data.setMomentsCounter((int) counter);
		}
	}

	public PublishSubject<Pair<String, Integer>> coilChanges() {
		return this.coilSubject;
	}
	
	public PublishSubject<Pair<String, Long>> messageCounterChanges() {
		return this.messageCounterSubject;
	}
	
}

