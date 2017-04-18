package com.treelogic.framework.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.treelogic.framework.domain.MobileHistory;

public interface MobileHistoryRepository
		extends MongoRepository<MobileHistory, String>, QueryDslPredicateExecutor<MobileHistory> {

}