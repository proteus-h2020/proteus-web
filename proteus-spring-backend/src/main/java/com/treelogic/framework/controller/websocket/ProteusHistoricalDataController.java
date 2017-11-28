package com.treelogic.framework.controller.websocket;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;
import com.treelogic.framework.domain.tuples.Tuple2;
import com.treelogic.framework.service.ProteusHistoricalRecordService;

import rx.Observable;
import rx.Subscriber;

@Controller
@Configuration
public class ProteusHistoricalDataController {

	@Autowired
	private ProteusHistoricalRecordService proteusService;

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ProteusHistoricalDataController.class);
	
	@Value("${controller.buffer.realtime.size}")
	private int realTimeBufferSize;

	public ProteusHistoricalDataController() {
	}

	@MessageMapping("/get/data/coil/{coilID}/{varID}")
	public void getCoilData(@DestinationVariable int coilID, @DestinationVariable int varID) {
		LOGGER.info("Received Coil Id: " + coilID+" and var " + varID);
		this.sendProteusData(coilID, varID);
	}

	private void sendProteusData(final int coilID, int varID) {	
		
		List<ProteusRealtimeRecord> realtime = this.proteusService.findRealtimeByCoilIdVarId(coilID, varID);		
		LOGGER.info(String.format("Sending %1$s realtime records by coilId: %2$s and varId: %3$s with buffer size: %4$s", realtime.size(), coilID, varID, realTimeBufferSize));
		
		if (!realtime.isEmpty()) {
			Observable.from(realtime).buffer(realTimeBufferSize).subscribe(new Subscriber<List<ProteusRealtimeRecord>>()  {

				@Override
				public void onCompleted() {
					LOGGER.info("Realtime record send completed");
					
				}

				@Override
				public void onError(Throwable throwable) {
					LOGGER.error(String.format("Realtime record send with error: %1$s", throwable));
					
				}

				@Override
				public void onNext(List<ProteusRealtimeRecord> proteusRealtimeRecords) {
					for (ProteusRealtimeRecord record : proteusRealtimeRecords) {
						//TODO: ?¿ Could not replay
//						try {
//							Thread.sleep(30); // if we remove this line websocket connection is closed when sending data. Some kind of data overflow happens.
//						} catch (InterruptedException e) {
//							// TODO Auto-generated catch block
//							e.printStackTrace();
//						}
						simpMessagingTemplate.convertAndSend("/topic/get/data/coil",
								new Tuple2<Integer, ProteusRealtimeRecord>(coilID, record));
					}
					
				}
			});
		}
	}
	
	@MessageMapping("/get/realtime/coil/{coilID}")
	public void getRealtimeData(@DestinationVariable int coilID) {
		LOGGER.info("Received Coil Id: " + coilID);
		this.sendRealtimeData(coilID);
		
	}

	private void sendRealtimeData(final int coilID) {

		List<ProteusRealtimeRecord> realTimeRecords = this.proteusService.findRealtimeByCoilId(coilID);
		LOGGER.info(String.format("Sending %1$s realtime records by coilId: %2$s with buffer size: %3$s", realTimeRecords.size(), coilID, realTimeBufferSize));

		if (!realTimeRecords.isEmpty()) {
			Observable.from(realTimeRecords).buffer(realTimeBufferSize).subscribe(new Subscriber<List<ProteusRealtimeRecord>>() {
				@Override
				public void onCompleted() {
					LOGGER.info("Realtime data stream Completed");
				}

				@Override
				public void onError(Throwable throwable) {
					LOGGER.error(String.format("Realtime record send with error: %1$s", throwable));
				}

				@Override
				public void onNext(List<ProteusRealtimeRecord> proteusRealtimeRecords) {
					for (ProteusRealtimeRecord record : proteusRealtimeRecords) {
						simpMessagingTemplate.convertAndSend("/topic/get/realtime/coil",
								new Tuple2<Integer, ProteusRealtimeRecord>(coilID, record));
					}
				}
			});
		}
	}

	@MessageMapping("/get/keys")
	public void getKeys() {
		LOGGER.info("Send keys");
		this.sendKeys();
	}

	private void sendKeys() {
		List<Integer> keys = this.proteusService.findKeys();
		LOGGER.info(String.format("Sending %1$s keys with buffer size: %2$s", keys.size(), realTimeBufferSize));

		Observable.from(keys).buffer(realTimeBufferSize).subscribe(new Subscriber<List<Integer>>() {
			@Override
			public void onCompleted() {
				LOGGER.info("Keys data Completed");
			}

			@Override
			public void onError(Throwable throwable) {
				LOGGER.error(String.format("keys send with error: %1$s", throwable));
			}

			@Override
			public void onNext(List<Integer> keys) {
				for (Integer k : keys) {
					simpMessagingTemplate.convertAndSend("/topic/get/keys",
							new Tuple2<Integer, Integer>(k, k));
				}
			}
		});
	}

	@MessageMapping("/get/simplemoments/coil/{coilID}")
	public void getSimpleMomentsData(@DestinationVariable int coilID) {
		LOGGER.info("Received Coil Id: " + coilID);
		this.sendSimpleMomentsData(coilID);

	}

	private void sendSimpleMomentsData(final int coilID) {

		List<ProteusHistoricalRecord.ProteusSimpleMoment> simplemomentsrecords = this.proteusService.findSimpleMomentsByCoidId(coilID);

		LOGGER.info(String.format("Sending %1$s simple moments records by coilId: %2$s with buffer size: %3$s", simplemomentsrecords.size(), coilID, realTimeBufferSize));

		Observable.from(simplemomentsrecords).buffer(realTimeBufferSize).subscribe(new Subscriber<List<ProteusHistoricalRecord.ProteusSimpleMoment>>() {
			@Override
			public void onCompleted() {
				LOGGER.info("Simplemoment data Completed");
			}

			@Override
			public void onError(Throwable throwable) {
				LOGGER.error(String.format("simple moments data send with error: %1$s", throwable));
			}

			@Override
			public void onNext(List<ProteusHistoricalRecord.ProteusSimpleMoment> proteusSimpleMomentRecord) {
				
				for (ProteusHistoricalRecord.ProteusSimpleMoment sm : proteusSimpleMomentRecord) {
					simpMessagingTemplate.convertAndSend("/topic/get/simplemoments/coil",
							new Tuple2<Integer, ProteusHistoricalRecord.ProteusSimpleMoment>(coilID, sm));
				}
			}
		});

	}

	@MessageMapping("/get/hsm/coil/")
	public void getHSMData(@DestinationVariable int[] coils) {
		LOGGER.info("Received Coil Id: " + coils);
		this.sendHSMData(coils);
	}

	private void sendHSMData(int[] coils) {

		List<Map<String, Object>> hsmrecords = this.proteusService.findHSMByCoilId(coils);
		LOGGER.info(String.format("Sending %1$s HSM records by coilId: %2$s with buffer size: %3$s", hsmrecords.size(), coils, realTimeBufferSize));

		Observable.from(hsmrecords).subscribe(new Subscriber<Map<String, Object>>() {
			@Override
			public void onCompleted() {
				LOGGER.info("HSM data Completed");
			}

			@Override
			public void onError(Throwable throwable) {
				LOGGER.error(String.format("HSM data send with error: %1$s", throwable));
			}

			@Override
			public void onNext(Map<String, Object> proteusHSMRecord) {

				simpMessagingTemplate.convertAndSend("/topic/get/hsm/coil",
						proteusHSMRecord);


			}
		});

	}

	@MessageMapping("/get/realtime/stream/coil/{coilID}") 
	public void getRealtimeStream (@DestinationVariable int coilID){
		LOGGER.info("Received Coil Id: " + coilID);
		this.sendStreamRealTime(coilID);
		
	}

	private void sendStreamRealTime(int coilID) {

		Observable<ProteusRealtimeRecord> realtimeStream = this.proteusService.findRealtimeStream(coilID);

		realtimeStream.subscribe(new Subscriber<ProteusRealtimeRecord>() {
			@Override
			public void onCompleted() {
				LOGGER.info("Realtime data stream Completed");
			}

			@Override
			public void onError(Throwable throwable) {

			}

			@Override
			public void onNext(ProteusRealtimeRecord proteusRealtimeRecord) {
				LOGGER.info("REAL Realtime data: " + proteusRealtimeRecord.toString());
				simpMessagingTemplate.convertAndSend("/topic/get/realtime/stream/coil",
						proteusRealtimeRecord);
			}
		});


	}
	

}
