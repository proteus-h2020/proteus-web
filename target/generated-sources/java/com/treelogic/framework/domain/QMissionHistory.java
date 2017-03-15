package com.treelogic.framework.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMissionHistory is a Querydsl query type for MissionHistory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMissionHistory extends EntityPathBase<MissionHistory> {

    private static final long serialVersionUID = 671006823L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMissionHistory missionHistory = new QMissionHistory("missionHistory");

    public final QEntityHistory _super;

    // inherited
    public final QEntityTimestamp entity;

    //inherited
    public final StringPath id;

    public QMissionHistory(String variable) {
        this(MissionHistory.class, forVariable(variable), INITS);
    }

    public QMissionHistory(Path<? extends MissionHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMissionHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMissionHistory(PathMetadata metadata, PathInits inits) {
        this(MissionHistory.class, metadata, inits);
    }

    public QMissionHistory(Class<? extends MissionHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this._super = new QEntityHistory(type, metadata, inits);
        this.entity = _super.entity;
        this.id = _super.id;
    }

}

