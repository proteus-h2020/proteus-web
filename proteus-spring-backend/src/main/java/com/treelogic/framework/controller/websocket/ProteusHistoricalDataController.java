package com.treelogic.framework.controller.websocket;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.tuples.Tuple2;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;
import com.treelogic.framework.reactive.IncrementalHistoricalRecordFlow;
import com.treelogic.framework.service.ProteusHistoricalRecordService;

import rx.Subscriber;

@Controller
@Configuration
public class ProteusHistoricalDataController {

	@Autowired
	private ProteusHistoricalRecordService proteusService;

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	private static final Logger LOGGER = LoggerFactory.getLogger(ProteusHistoricalDataController.class);

	public ProteusHistoricalDataController() {
	}

	@MessageMapping("/get/data/coil/{coilID}/{varID}")
	public void getCoilData(@DestinationVariable int coilID, @DestinationVariable int varID) {
		LOGGER.info("Received Coil Id: " + coilID+" and var " + varID);
		this.sendProteusData(coilID, varID);
	}

	private void sendProteusData(final int coilID, int varID) {
		//ProteusHistoricalRecord record = this.proteusService.findOne(coilID);
		List<ProteusHistoricalRecord> record = this.proteusService.findByCoilIdAndProteusRealtimeVarId(coilID, varID);
		LOGGER.info("Sending : " + record + " \n");

		// ProteusFlatnessRecord[] flatness = record.getProteusFlatness();
		// ProteusRealtimeRecord[] realtime = record.getProteusRealtime();
		// Map<String, Object> hsm = record.getProteusHSM();
		// ProteusSimpleMoment[] moments = record.getCalculations();
		// Observable.from(realtime).take

		IncrementalHistoricalRecordFlow flow = new IncrementalHistoricalRecordFlow(record.get(0), 100);

		flow.startFlow().subscribe(new Subscriber<List<ProteusRealtimeRecord>>() {

			@Override
			public void onCompleted() {

			}

			@Override
			public void onError(Throwable arg0) {

			}

			@Override
			public void onNext(List<ProteusRealtimeRecord> r) {
				// simpMessagingTemplate.convertAndSend(
				// "/topic/get/data/coil",
				// new Tuple2<Integer, List<ProteusRealtimeRecord>>(coilID,r)
				// );
				for (ProteusRealtimeRecord record : r) {
					try {
						Thread.sleep(30); // if we remove this line websocket connection is closed when sending data. Some kind of data overflow happens. 
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					simpMessagingTemplate.convertAndSend("/topic/get/data/coil",
							new Tuple2<Integer, ProteusRealtimeRecord>(coilID, record));
				}
			}

		});

	}

}
