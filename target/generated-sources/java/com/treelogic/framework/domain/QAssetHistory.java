package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAssetHistory is a Querydsl query type for AssetHistory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAssetHistory extends EntityPathBase<AssetHistory> {

    private static final long serialVersionUID = 1620472387L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAssetHistory assetHistory = new QAssetHistory("assetHistory");

    public final QEntityHistory _super;

    // inherited
    public final QEntityTimestamp entity;

    //inherited
    public final StringPath id;

    public QAssetHistory(String variable) {
        this(AssetHistory.class, forVariable(variable), INITS);
    }

    public QAssetHistory(Path<? extends AssetHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAssetHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAssetHistory(PathMetadata metadata, PathInits inits) {
        this(AssetHistory.class, metadata, inits);
    }

    public QAssetHistory(Class<? extends AssetHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QEntityHistory(type, metadata, inits);
        this.entity = _super.entity;
        this.id = _super.id;
    }

}

