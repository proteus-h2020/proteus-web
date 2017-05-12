package com.treelogic.framework.repository;

import java.util.List;

import com.treelogic.framework.domain.Asset;

public interface MissionRepositoryCustom {

	public List<Asset> findLostAssets();
}