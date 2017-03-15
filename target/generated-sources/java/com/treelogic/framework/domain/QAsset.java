package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAsset is a Querydsl query type for Asset
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAsset extends EntityPathBase<Asset> {

    private static final long serialVersionUID = 256533777L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAsset asset = new QAsset("asset");

    public final QEntityTimestamp _super = new QEntityTimestamp(this);

    //inherited
    public final NumberPath<Long> createdDate = _super.createdDate;

    public final StringPath description = createString("description");

    //inherited
    public final StringPath id = _super.id;

    //inherited
    public final NumberPath<Long> lastModifiedDate = _super.lastModifiedDate;

    public final NumberPath<Long> loadingMilliseconds = createNumber("loadingMilliseconds", Long.class);

    public final org.springframework.data.mongodb.core.geo.QGeoJsonPoint location;

    public final NumberPath<Integer> priority = createNumber("priority", Integer.class);

    public final StringPath qrId = createString("qrId");

    public final EnumPath<Asset.AssetReason> reason = createEnum("reason", Asset.AssetReason.class);

    public final EnumPath<Asset.AssetStatus> status = createEnum("status", Asset.AssetStatus.class);

    public final EnumPath<Asset.AssetType> type = createEnum("type", Asset.AssetType.class);

    public final NumberPath<Integer> volume = createNumber("volume", Integer.class);

    public final NumberPath<Integer> weight = createNumber("weight", Integer.class);

    public QAsset(String variable) {
        this(Asset.class, forVariable(variable), INITS);
    }

    public QAsset(Path<? extends Asset> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAsset(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAsset(PathMetadata metadata, PathInits inits) {
        this(Asset.class, metadata, inits);
    }

    public QAsset(Class<? extends Asset> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.location = inits.isInitialized("location") ? new org.springframework.data.mongodb.core.geo.QGeoJsonPoint(forProperty("location")) : null;
    }

}

