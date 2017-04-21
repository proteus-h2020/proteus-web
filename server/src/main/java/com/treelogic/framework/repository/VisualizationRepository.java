package com.treelogic.framework.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.treelogic.framework.domain.Visualization;


public interface VisualizationRepository extends MongoRepository<Visualization, String>, QueryDslPredicateExecutor<Visualization> {

}