package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QEntityTimestamp is a Querydsl query type for EntityTimestamp
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QEntityTimestamp extends EntityPathBase<EntityTimestamp> {

    private static final long serialVersionUID = 357833044L;

    public static final QEntityTimestamp entityTimestamp = new QEntityTimestamp("entityTimestamp");

    public final NumberPath<Long> createdDate = createNumber("createdDate", Long.class);

    public final StringPath id = createString("id");

    public final NumberPath<Long> lastModifiedDate = createNumber("lastModifiedDate", Long.class);

    public QEntityTimestamp(String variable) {
        super(EntityTimestamp.class, forVariable(variable));
    }

    public QEntityTimestamp(Path<? extends EntityTimestamp> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEntityTimestamp(PathMetadata metadata) {
        super(EntityTimestamp.class, metadata);
    }

}

