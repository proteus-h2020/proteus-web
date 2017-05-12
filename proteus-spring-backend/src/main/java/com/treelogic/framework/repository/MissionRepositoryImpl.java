package com.treelogic.framework.repository;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.unwind;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.query.Criteria;

import com.treelogic.framework.domain.Asset;
import com.treelogic.framework.domain.Asset.AssetType;
import com.treelogic.framework.domain.Mission;

public class MissionRepositoryImpl implements MissionRepositoryCustom {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public List<Asset> findLostAssets() {
		Aggregation aggregation = newAggregation(project("assets"), unwind("assets"),
				match(Criteria.where("assets.type").is(AssetType.NFI)),
				group("assets").addToSet("assets").as("assetsArray"));
		return mongoTemplate.aggregate(aggregation, Mission.class, Asset.class).getMappedResults();
	}
}