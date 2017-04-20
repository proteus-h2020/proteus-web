package org.server.framework.repository;

import org.server.framework.domain.MissionHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;


public interface MissionHistoryRepository
		extends MongoRepository<MissionHistory, String>, QueryDslPredicateExecutor<MissionHistory> {

}