package org.server.framework.service;

import org.server.framework.domain.EntityHistory;
import org.server.framework.domain.EntityTimestamp;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;


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