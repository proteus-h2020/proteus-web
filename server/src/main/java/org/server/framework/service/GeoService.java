package org.server.framework.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.geo.GeoJsonPolygon;
import org.springframework.stereotype.Service;

@Service
public class GeoService {

	public GeoJsonPolygon fromPoints(List<Double> polygon) {
		List<Point> points = new ArrayList<>();
		for (int i = 0; i < polygon.size(); i += 2)
			points.add(new GeoJsonPoint(polygon.get(i), polygon.get(i + 1)));
		return new GeoJsonPolygon(points);
	}
}