package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMobileHistory is a Querydsl query type for MobileHistory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMobileHistory extends EntityPathBase<MobileHistory> {

    private static final long serialVersionUID = -283108685L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMobileHistory mobileHistory = new QMobileHistory("mobileHistory");

    public final QEntityHistory _super;

    // inherited
    public final QEntityTimestamp entity;

    //inherited
    public final StringPath id;

    public QMobileHistory(String variable) {
        this(MobileHistory.class, forVariable(variable), INITS);
    }

    public QMobileHistory(Path<? extends MobileHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMobileHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMobileHistory(PathMetadata metadata, PathInits inits) {
        this(MobileHistory.class, metadata, inits);
    }

    public QMobileHistory(Class<? extends MobileHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QEntityHistory(type, metadata, inits);
        this.entity = _super.entity;
        this.id = _super.id;
    }

}

