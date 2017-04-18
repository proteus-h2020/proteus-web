package com.treelogic.framework.controller;

import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.treelogic.framework.domain.Asset;
import com.treelogic.framework.domain.Visualization;

import com.treelogic.framework.repository.VisualizationRepository;
import com.treelogic.framework.service.ErrorService;
import com.treelogic.framework.service.HistoryService;
import com.treelogic.framework.service.PredicateService;

@RestController
public class VisualizationController {

	public static final String PATH = "/visualizations";

	@Autowired
	private VisualizationRepository visualizationRepository;
	
	@Autowired
	private PredicateService predicateService;

	@Autowired
	private HistoryService historyService;

	@Autowired
	private ErrorService errorService;

	@RequestMapping(path = PATH, method = RequestMethod.GET)
	public @ResponseBody Page<Visualization> get(Pageable pageable, @RequestParam(required = false) String where,
			@RequestParam(required = false) String exclude) {
		return this.visualizationRepository.findAll(predicateService.predicate(where, Visualization.class), pageable);
	}

	@RequestMapping(path = PATH, method = RequestMethod.POST)
	public ResponseEntity<?> post(@Valid @RequestBody Visualization visualization, BindingResult bindingResult, Locale locale)
			throws InstantiationException, IllegalAccessException {
		Visualization result  = this.visualizationRepository.save(visualization);
		return ResponseEntity.ok(result);
	}

	@RequestMapping(path = PATH + "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> put(@PathVariable String missionId, @Valid @RequestBody Visualization visualization,
			BindingResult bindingResult, Locale locale) throws InstantiationException, IllegalAccessException {
		return ResponseEntity.ok(null);

		/**
		mission.setId(missionId);
		return ResponseEntity
				.ok(historyService.stamp(mission, MissionHistory.class, missionRepository, missionHistoryRepository));
		**/
	}

	@RequestMapping(path = PATH + "/{id}/assets", method = RequestMethod.POST)
	public ResponseEntity<?> postAsset(@PathVariable String missionId, @Valid @RequestBody Asset asset,
			BindingResult bindingResult, Locale locale) throws InstantiationException, IllegalAccessException {
		return ResponseEntity.ok(null);
		/**
		Mission mission = missionRepository.findOne(missionId);
		if (mission != null) {
			if (!StringUtils.hasText(asset.getId()))
				asset = assetRepository.save(asset);
			mission.getAssets().add(asset);
			return ResponseEntity.ok(
					historyService.stamp(mission, MissionHistory.class, missionRepository, missionHistoryRepository));
		} else {
			return ResponseEntity.badRequest().body(errorService.badRequestNotFound(Mission.class, locale));
		}
		*/
	}
}