package com.treelogic.framework.service;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import com.treelogic.framework.domain.EntityHistory;
import com.treelogic.framework.domain.EntityTimestamp;

@Service
public class HistoryService {

	public <T extends EntityTimestamp, U extends EntityHistory> T stamp(T entity, Class<U> classType,
			MongoRepository<T, String> entityRepository, MongoRepository<U, String> historyRepository)
			throws InstantiationException, IllegalAccessException {
		entity = entityRepository.save(entity);
		U history = classType.newInstance();
		history.setEntity(entity);
		historyRepository.save(history);
		return entity;
	}
}