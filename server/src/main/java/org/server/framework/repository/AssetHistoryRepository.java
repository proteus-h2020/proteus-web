package org.server.framework.repository;

import org.server.framework.domain.AssetHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;


public interface AssetHistoryRepository
		extends MongoRepository<AssetHistory, String>, QueryDslPredicateExecutor<AssetHistory> {

}