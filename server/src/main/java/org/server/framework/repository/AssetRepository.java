package org.server.framework.repository;

import org.server.framework.domain.Asset;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;


public interface AssetRepository extends MongoRepository<Asset, String>, QueryDslPredicateExecutor<Asset> {

}