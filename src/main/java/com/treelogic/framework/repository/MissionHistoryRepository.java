package com.treelogic.framework.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.treelogic.framework.domain.MissionHistory;

public interface MissionHistoryRepository
		extends MongoRepository<MissionHistory, String>, QueryDslPredicateExecutor<MissionHistory> {

}