package org.server.framework.repository;

import org.server.framework.domain.Mobile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.geo.GeoJsonPolygon;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;


public interface MobileRepository extends MongoRepository<Mobile, String>, QueryDslPredicateExecutor<Mobile> {

	public Page<Mobile> findByLocationWithin(GeoJsonPolygon polygon, Pageable pageable);
}