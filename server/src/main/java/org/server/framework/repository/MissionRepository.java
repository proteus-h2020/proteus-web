package org.server.framework.repository;

import org.server.framework.domain.Mission;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;


public interface MissionRepository extends MongoRepository<Mission, String>, QueryDslPredicateExecutor<Mission> {
	
}