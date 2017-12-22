package com.treelogic.framework.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;
import com.treelogic.framework.repository.ProteusHistoricalRecordRepository;

import rx.Observable;

@Service
public class ProteusHistoricalRecordService {

	private ProteusHistoricalRecordRepository proteusRepository;

	@Autowired
	public void setProteusRepository(ProteusHistoricalRecordRepository proteusRepository) {
		this.proteusRepository = proteusRepository;
	}

	public ProteusHistoricalRecord findOne(Integer id) {
		return proteusRepository.findOne(id);
	}

	public List<Integer> findAllCoilIDs() {
		return proteusRepository.findAllCoilIDs();
	}
	
	public List<ProteusHistoricalRecord> findByCoilIdAndProteusRealtimeVarId(int coilid, int varid){
		return this.proteusRepository.findByCoilIdAndProteusRealtimeVarId(coilid, varid);
	}

	public List<ProteusRealtimeRecord> findRealtimeByCoilId(int coilid) {
		return this.proteusRepository.findProteusRealTimeByCoilId(coilid);
	}

	public List<ProteusHistoricalRecord.ProteusSimpleMoment> findSimpleMomentsByCoidId(int coilid) {
		return this.proteusRepository.findProteusCalculationsByCoilId(coilid);
	}

	public List<Map<String, Object>> findHSMByCoilId(int[] coils) {
		return this.proteusRepository.findProteusHSMByCoilId(coils);
	}

	public Observable<ProteusRealtimeRecord> findRealtimeStream(int coilid) {
		return this.proteusRepository.findProteusRealtimeStream(coilid);
	}

	public List<ProteusRealtimeRecord> findRealtimeByCoilIdVarId(int coilID, int varID) {
		return this.proteusRepository.findProteusRealTimeByCoilIdVarId(coilID,varID);
	}
	
}
