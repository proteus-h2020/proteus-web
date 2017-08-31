package com.treelogic.framework.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.repository.ProteusHistoricalRecordRepository;

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

	public List<Integer> findKeys() {
		return proteusRepository.findKeys();
	}
	
	public List<ProteusHistoricalRecord> findByCoilIdAndProteusRealtimeVarId(int coilid, int varid){
		return this.proteusRepository.findByCoilIdAndProteusRealtimeVarId(coilid, varid);
	}

	
}
