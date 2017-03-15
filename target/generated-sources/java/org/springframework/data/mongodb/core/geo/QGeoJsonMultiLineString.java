package org.springframework.data.mongodb.core.geo;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QGeoJsonMultiLineString is a Querydsl query type for GeoJsonMultiLineString
 */
@Generated("com.querydsl.codegen.EmbeddableSerializer")
public class QGeoJsonMultiLineString extends BeanPath<GeoJsonMultiLineString> {

    private static final long serialVersionUID = 769591416L;

    public static final QGeoJsonMultiLineString geoJsonMultiLineString = new QGeoJsonMultiLineString("geoJsonMultiLineString");

    public final SimplePath<Iterable<GeoJsonLineString>> coordinates = createSimple("coordinates", Iterable.class);

    public final StringPath type = createString("type");

    public QGeoJsonMultiLineString(String variable) {
        super(GeoJsonMultiLineString.class, forVariable(variable));
    }

    public QGeoJsonMultiLineString(Path<? extends GeoJsonMultiLineString> path) {
        super(path.getType(), path.getMetadata());
    }

    public QGeoJsonMultiLineString(PathMetadata metadata) {
        super(GeoJsonMultiLineString.class, metadata);
    }

}

