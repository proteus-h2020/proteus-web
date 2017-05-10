package com.treelogic.framework.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.treelogic.framework.domain.Mobile;
import com.treelogic.framework.domain.MobileHistory;
import com.treelogic.framework.repository.MobileHistoryRepository;
import com.treelogic.framework.repository.MobileRepository;
import com.treelogic.framework.service.GeoService;
import com.treelogic.framework.service.HistoryService;
import com.treelogic.framework.service.PredicateService;

@RestController
public class MobileController {

	public static final String PATH = "/api/mobiles";

	@Autowired
	private MobileRepository mobileRepository;

	@Autowired
	private MobileHistoryRepository mobileHistoryRepository;

	@Autowired
	private PredicateService predicateService;

	@Autowired
	private HistoryService historyService;

	@Autowired
	private GeoService geoService;

	// Only allow queries from this URL
	//
	@CrossOrigin(origins = "http://api.jquery.com")
	// Example:
	//
	// mobiles?page=0&size=10&sort=id,ASC&where=id>3,id<6&exclude=id
	//
	@RequestMapping(path = PATH, method = RequestMethod.GET)
	public @ResponseBody Page<Mobile> get(Pageable pageable, @RequestParam(required = false) String where,
			@RequestParam(required = false) String exclude) {
		return mobileRepository.findAll(predicateService.predicate(where, Mobile.class), pageable);
	}

	@RequestMapping(path = PATH, method = RequestMethod.POST)
	public ResponseEntity<?> post(@Valid @RequestBody Mobile mobile, BindingResult bindingResult, Locale locale)
			throws InstantiationException, IllegalAccessException {
		return ResponseEntity
				.ok(historyService.stamp(mobile, MobileHistory.class, mobileRepository, mobileHistoryRepository));
	}

	@RequestMapping(path = PATH + "/{mobileId}", method = RequestMethod.PUT)
	public ResponseEntity<?> put(@PathVariable String mobileId, @Valid @RequestBody Mobile mobile,
			BindingResult bindingResult, Locale locale) throws InstantiationException, IllegalAccessException {
		mobile.setId(mobileId);
		return ResponseEntity
				.ok(historyService.stamp(mobile, MobileHistory.class, mobileRepository, mobileHistoryRepository));
	}

	// Example:
	//
	// mobiles/within?polygon[]=-92,40,-94,40,-94,41,-93,40
	//
	@RequestMapping(path = PATH + "/within", method = RequestMethod.GET)
	public @ResponseBody Page<Mobile> getWithin(Pageable pageable,
			@RequestParam(required = false, value = "exclude") String exclude,
			@RequestParam(required = true, value = "polygon[]") List<Double> polygon) {
		return mobileRepository.findByLocationWithin(geoService.fromPoints(polygon), pageable);
	}
}