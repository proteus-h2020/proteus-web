package com.treelogic.framework.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.treelogic.framework.domain.AssetHistory;

public interface AssetHistoryRepository
		extends MongoRepository<AssetHistory, String>, QueryDslPredicateExecutor<AssetHistory> {

}