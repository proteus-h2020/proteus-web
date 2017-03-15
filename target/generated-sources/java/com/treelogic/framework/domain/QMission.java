package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMission is a Querydsl query type for Mission
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMission extends EntityPathBase<Mission> {

    private static final long serialVersionUID = -804915347L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMission mission = new QMission("mission");

    public final QEntityTimestamp _super = new QEntityTimestamp(this);

    public final SetPath<Asset, QAsset> assets = this.<Asset, QAsset>createSet("assets", Asset.class, QAsset.class, PathInits.DIRECT2);

    //inherited
    public final NumberPath<Long> createdDate = _super.createdDate;

    public final StringPath description = createString("description");

    public final org.springframework.data.mongodb.core.geo.QGeoJsonPoint destination;

    public final NumberPath<Long> endDate = createNumber("endDate", Long.class);

    //inherited
    public final StringPath id = _super.id;

    //inherited
    public final NumberPath<Long> lastModifiedDate = _super.lastModifiedDate;

    public final QMobile leader;

    public final SetPath<Mobile, QMobile> mobiles = this.<Mobile, QMobile>createSet("mobiles", Mobile.class, QMobile.class, PathInits.DIRECT2);

    public final org.springframework.data.mongodb.core.geo.QGeoJsonPoint origin;

    public final org.springframework.data.mongodb.core.geo.QGeoJsonMultiLineString route;

    public final NumberPath<Long> startDate = createNumber("startDate", Long.class);

    public final EnumPath<Mission.MissionStatus> status = createEnum("status", Mission.MissionStatus.class);

    public QMission(String variable) {
        this(Mission.class, forVariable(variable), INITS);
    }

    public QMission(Path<? extends Mission> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMission(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMission(PathMetadata metadata, PathInits inits) {
        this(Mission.class, metadata, inits);
    }

    public QMission(Class<? extends Mission> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.destination = inits.isInitialized("destination") ? new org.springframework.data.mongodb.core.geo.QGeoJsonPoint(forProperty("destination")) : null;
        this.leader = inits.isInitialized("leader") ? new QMobile(forProperty("leader"), inits.get("leader")) : null;
        this.origin = inits.isInitialized("origin") ? new org.springframework.data.mongodb.core.geo.QGeoJsonPoint(forProperty("origin")) : null;
        this.route = inits.isInitialized("route") ? new org.springframework.data.mongodb.core.geo.QGeoJsonMultiLineString(forProperty("route")) : null;
    }

}

