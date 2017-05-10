package com.treelogic.framework.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.treelogic.framework.domain.Mission;

public interface MissionRepository
		extends MongoRepository<Mission, String>, QueryDslPredicateExecutor<Mission>, MissionRepositoryCustom {

}