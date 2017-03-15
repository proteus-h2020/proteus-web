package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMobile is a Querydsl query type for Mobile
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMobile extends EntityPathBase<Mobile> {

    private static final long serialVersionUID = -298034527L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMobile mobile = new QMobile("mobile");

    public final QEntityTimestamp _super = new QEntityTimestamp(this);

    //inherited
    public final NumberPath<Long> createdDate = _super.createdDate;

    //inherited
    public final StringPath id = _super.id;

    //inherited
    public final NumberPath<Long> lastModifiedDate = _super.lastModifiedDate;

    public final org.springframework.data.mongodb.core.geo.QGeoJsonPoint location;

    public QMobile(String variable) {
        this(Mobile.class, forVariable(variable), INITS);
    }

    public QMobile(Path<? extends Mobile> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMobile(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMobile(PathMetadata metadata, PathInits inits) {
        this(Mobile.class, metadata, inits);
    }

    public QMobile(Class<? extends Mobile> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.location = inits.isInitialized("location") ? new org.springframework.data.mongodb.core.geo.QGeoJsonPoint(forProperty("location")) : null;
    }

}

