package com.treelogic.framework.controller.websocket;

import java.util.List;
import java.util.Map;
import java.util.Arrays;

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
import com.treelogic.framework.service.ProteusHistoricalRecordService;
import com.treelogic.framework.domain.Pair;

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

	@MessageMapping("/get/historical/coil/var/{coilID}/{varID}")
	public void getHistoricalData(@DestinationVariable int coilID, @DestinationVariable int varID) {
		LOGGER.info("[getHistoricalData] Received Coil Id: " + coilID+" and var " + varID);
		this.sendHistoricalData(coilID, varID);
	}

	private void sendHistoricalData(final int coilID, final int varID) {	
		
		List<ProteusRealtimeRecord> historicalRecords = this.proteusService.findRealtimeByCoilIdVarId(coilID, varID);		
		LOGGER.info(String.format("Sending %1$s historical records by coilId: %2$s and varId: %3$s with buffer size: %4$s", historicalRecords.size(), coilID, varID, realTimeBufferSize));
		
		if (!historicalRecords.isEmpty()) {
			Observable.from(historicalRecords).buffer(realTimeBufferSize).subscribe(new Subscriber<List<ProteusRealtimeRecord>>()  {

				@Override
				public void onCompleted() {
					LOGGER.info("Historical record send completed");
					
				}

				@Override
				public void onError(Throwable throwable) {
					LOGGER.error(String.format("Historical record send with error: %1$s", throwable));
					
				}

				@Override
				public void onNext(List<ProteusRealtimeRecord> proteusRealtimeRecords) {
					for (ProteusRealtimeRecord record : proteusRealtimeRecords) {
						simpMessagingTemplate.convertAndSend("/topic/get/historical/" + coilID + "/" + varID,
								new Pair<Integer, ProteusRealtimeRecord>(coilID, record));
					}
				}
			});
		}
	}
	
	@MessageMapping("/get/realtime/coil/{coilID}")
	public void getRealtimeData(@DestinationVariable int coilID) {
		LOGGER.info("[getRealtimeData] Received Coil Id: " + coilID);
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
						simpMessagingTemplate.convertAndSend("/topic/get/realtime",
								new Pair<Integer, ProteusRealtimeRecord>(coilID, record));
					}
				}
			});
		}
	}

	@MessageMapping("/get/all/coilIDs")
	public void getAllCoilIDs() {
		LOGGER.info("[getAllCoilIDs] Send All CoilIDs");
		this.sendAllCoilIDs();
	}

	private void sendAllCoilIDs() {
		List<Integer> allCoilIDs = this.proteusService.findAllCoilIDs();
		LOGGER.info(String.format("Sending %1$s coilIDs with buffer size: %2$s", allCoilIDs.size(), realTimeBufferSize));

		Observable.from(allCoilIDs).buffer(realTimeBufferSize).subscribe(new Subscriber<List<Integer>>() {
			@Override
			public void onCompleted() {
				LOGGER.info("all CoilIDs data Completed");
			}

			@Override
			public void onError(Throwable throwable) {
				LOGGER.error(String.format("allCoilIDs send with error: %1$s", throwable));
			}

			@Override
			public void onNext(List<Integer> allCoilIDs) {
				simpMessagingTemplate.convertAndSend("/topic/get/all/coilIDs", allCoilIDs);
			}
		});
	}

	@MessageMapping("/get/simplemoments/coil/var/{coilID}/{varID}")
	public void getSimpleMomentsData(@DestinationVariable int coilID, @DestinationVariable int varID) {
		LOGGER.info("[getSimpleMomentsData] Received Coil Id: " + coilID + " and Var Id: " + varID);
		this.sendSimpleMomentsData(coilID, varID);

	}

	private void sendSimpleMomentsData(final int coilID, final int varID) {

		List<ProteusHistoricalRecord.ProteusSimpleMoment> simplemomentsrecords = this.proteusService.findSimpleMomentsByCoidIdVarId(coilID, varID);

		LOGGER.info(String.format("Sending %1$s simple moments records by coilId: %2$s  and varId: %3$s with buffer size: %4$s", 
				simplemomentsrecords.size(), coilID, varID, realTimeBufferSize));

		Observable.from(simplemomentsrecords).buffer(realTimeBufferSize).subscribe(new Subscriber<List<ProteusHistoricalRecord.ProteusSimpleMoment>>() {
			@Override
			public void onCompleted() {
				LOGGER.info("Simplemoments data Completed");
			}

			@Override
			public void onError(Throwable throwable) {
				LOGGER.error(String.format("simple moments data send with error: %1$s", throwable));
			}

			@Override
			public void onNext(List<ProteusHistoricalRecord.ProteusSimpleMoment> proteusSimpleMomentRecord) {
				
				for (ProteusHistoricalRecord.ProteusSimpleMoment sm : proteusSimpleMomentRecord) {
					simpMessagingTemplate.convertAndSend("/topic/get/simplemoments/" + coilID + "/" + varID,
							new Pair<Integer, ProteusHistoricalRecord.ProteusSimpleMoment>(coilID, sm));
				}
			}
		});

	}

	@MessageMapping("/get/hsm/coils/vars/{coilIDs}/{hsmVars}")
	public void getHSMData(@DestinationVariable int[] coilIDs, @DestinationVariable String[] hsmVars) {
		LOGGER.info(String.format("[getHSMData] Received Coil Ids: %s and HSM variables: %s", 
				Arrays.toString(coilIDs), Arrays.toString(hsmVars)));
		this.sendHSMData(coilIDs, hsmVars);
	}

	private void sendHSMData(final int[] coilIDs, final String[] hsmVars) {

		Observable<Map<String, Object>> hsmrecords = this.proteusService.findHSMByCoilIdsVars(coilIDs, hsmVars);
		LOGGER.info(String.format("Sending HSM data with Coil Ids: %s and HSM variables: %s", 
				Arrays.toString(coilIDs), Arrays.toString(hsmVars)));
		
		hsmrecords.subscribe(new Subscriber<Map<String, Object>>() {
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
				String endpoint = String.format("/topic/get/hsm/%1$s/%2$s",
						Arrays.toString(coilIDs).replaceAll("[\\[\\]\\p{Z}]",""), 
						Arrays.toString(hsmVars).replaceAll("[\\[\\]\\p{Z}]",""));

				simpMessagingTemplate.convertAndSend(endpoint, proteusHSMRecord);
			}
		});

	}
	
	@MessageMapping("/get/all/hsmVars")
	public void getAllHSMVars() {
		LOGGER.info("[getAllHSMVars] Send all HSM variables");
		this.sendAllHSMvars();
	}
	
	public void sendAllHSMvars() {
		List<String> allHSMvars = this.proteusService.findAllHSMvars();
		LOGGER.info(String.format("Sending %1$s HSM variables with buffer size: %2$s", allHSMvars.size(), realTimeBufferSize));

		Observable.from(allHSMvars).buffer(realTimeBufferSize).subscribe(new Subscriber<List<String>>() {
			@Override
			public void onCompleted() {
				LOGGER.info("all HSM variables data Completed");
			}

			@Override
			public void onError(Throwable throwable) {
				LOGGER.error(String.format("all HSM variables send with error: %1$s", throwable));
			}

			@Override
			public void onNext(List<String> allHSMvars) {
				simpMessagingTemplate.convertAndSend("/topic/get/all/hsmVars", allHSMvars);
			}
		});
	}

	@MessageMapping("/get/realtime/stream/coil/{coilID}") 
	public void getRealtimeStream (@DestinationVariable int coilID){
		LOGGER.info("[getRealtimeStream] Received Coil Id: " + coilID);
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
				simpMessagingTemplate.convertAndSend("/topic/get/realtime/stream",
						proteusRealtimeRecord);
			}
		});


	}
	

}
