package com.treelogic.framework.service;


import com.treelogic.framework.domain.MomentsResult;
import com.treelogic.framework.domain.Pair;
import com.treelogic.framework.domain.ProteusAppData;
import com.treelogic.framework.domain.SensorMeasurement;

import io.reactivex.subjects.PublishSubject;

public class ProteusAppService {

	
	private ProteusAppData data = new ProteusAppData();
	
	//private static final Logger LOGGER = LoggerFactory.getLogger(ProteusAppService.class);

	private PublishSubject<Pair<String, Integer>> coilSubject = PublishSubject.create();

	
	public void update(MomentsResult datum){
		this.updateCoilId(datum.getCoilId());
		this.updateMomentsCounter(datum.getCounter());				
	}
	
	public void update(SensorMeasurement datum){
		this.updateCoilId(datum.getCoilId());
		this.updateCurrentX(datum.getX());
	}
	
	public ProteusAppData getData(){
		return this.data;
	}
	
	
	private void updateCurrentX(double x){
		if(x != data.getCoilId()){
			data.setCurrentX(x);
		}
	}
	
	private void updateCoilId(int coilId){
		if(coilId != data.getCoilId()){
			this.coilSubject.onNext(new Pair<String, Integer>("coilId", coilId));
			data.setCoilId(coilId);
		}
	}
	
	private void updateMomentsCounter(double counter){
		if(counter != data.getMomentsCounter()){
			data.setMomentsCounter((int)counter);
		}
	}
	
	
	public PublishSubject<Pair<String, Integer>> coilChanges(){
		return this.coilSubject;
	}
}
