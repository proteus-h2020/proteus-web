package org.server.framework.repository;

import org.server.framework.domain.Visualization;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;



public interface VisualizationRepository extends MongoRepository<Visualization, String>, QueryDslPredicateExecutor<Visualization> {

}