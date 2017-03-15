package com.treelogic.framework.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.treelogic.framework.domain.Asset;

public interface AssetRepository extends MongoRepository<Asset, String>, QueryDslPredicateExecutor<Asset> {

}