package org.server.framework.repository;

import org.server.framework.domain.MobileHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;


public interface MobileHistoryRepository
		extends MongoRepository<MobileHistory, String>, QueryDslPredicateExecutor<MobileHistory> {

}