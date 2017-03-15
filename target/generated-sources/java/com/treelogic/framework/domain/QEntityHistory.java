package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QEntityHistory is a Querydsl query type for EntityHistory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QEntityHistory extends EntityPathBase<EntityHistory> {

    private static final long serialVersionUID = -1423586222L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QEntityHistory entityHistory = new QEntityHistory("entityHistory");

    public final QEntityTimestamp entity;

    public final StringPath id = createString("id");

    public QEntityHistory(String variable) {
        this(EntityHistory.class, forVariable(variable), INITS);
    }

    public QEntityHistory(Path<? extends EntityHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QEntityHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QEntityHistory(PathMetadata metadata, PathInits inits) {
        this(EntityHistory.class, metadata, inits);
    }

    public QEntityHistory(Class<? extends EntityHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.entity = inits.isInitialized("entity") ? new QEntityTimestamp(forProperty("entity")) : null;
    }

}

