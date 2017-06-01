package com.treelogic.framework.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;

import com.treelogic.framework.domain.MomentsResult;
import com.treelogic.framework.domain.SensorMeasurement;

import io.reactivex.subjects.PublishSubject;

public class KafkaReceiver {

	private static final Logger LOGGER = LoggerFactory.getLogger(KafkaReceiver.class);

	private PublishSubject<SensorMeasurement> subjectRealtime = PublishSubject.create();
	private PublishSubject<MomentsResult> subjectMoments = PublishSubject.create();

	public KafkaReceiver() {
		LOGGER.info("Initializing KafkaReceiver");
	}

	public PublishSubject<SensorMeasurement> realtime() {
		return this.subjectRealtime;
	}

	public PublishSubject<MomentsResult> moments() {
		return this.subjectMoments;
	}

	@KafkaListener(topics = "${kafka.topicName}")
	public void receive(SensorMeasurement measure) {
		this.subjectRealtime.onNext(measure);
	}

	@KafkaListener(topics = "${kafka.topicNameMoments}")
	public void receiveMoments(MomentsResult moment) {
		this.subjectMoments.onNext(moment);
	}
}
