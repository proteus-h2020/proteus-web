package com.treelogic.framework.reactive;

import java.util.List;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;

import junit.framework.Assert;
import rx.Observer;
import rx.Subscriber;
import rx.functions.Func1;



@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles(value="test")
public class IncrementalHistoricalRecordFlowTests {
	
	private ProteusHistoricalRecord record = new ProteusHistoricalRecord(1000000);

	@Before
	public  void initialize(){
		ProteusRealtimeRecord[] realtimeRecord = new ProteusRealtimeRecord[13];
		realtimeRecord[0] = new ProteusRealtimeRecord(200,null,1,2554326.21);
		realtimeRecord[1] = new ProteusRealtimeRecord(435,null,1,3212);
		realtimeRecord[2] = new ProteusRealtimeRecord(554,null,1,524352.243);
		realtimeRecord[3] = new ProteusRealtimeRecord(676,null,1,43262.23);
		realtimeRecord[4] = new ProteusRealtimeRecord(889,null,1,643262.26);
		realtimeRecord[5] = new ProteusRealtimeRecord(1021,null,1,624362.26);
		realtimeRecord[6] = new ProteusRealtimeRecord(1220,null,1,55435.464);
		realtimeRecord[7] = new ProteusRealtimeRecord(1400,null,1,264563.226);
		realtimeRecord[8] = new ProteusRealtimeRecord(1500,null,1,254362.6);
		realtimeRecord[9] = new ProteusRealtimeRecord(1908,null,1,62436436.24362);
		realtimeRecord[10] = new ProteusRealtimeRecord(2000,null,1,6243646);
		realtimeRecord[11] = new ProteusRealtimeRecord(2130,null,1,64564.4);
		realtimeRecord[12] = new ProteusRealtimeRecord(2170,null,1,432532.326);
		record.setProteusRealtime(realtimeRecord);
	}
	
	@Test
	public void testReactiveFlow() throws Exception {
		IncrementalHistoricalRecordFlow flow = new IncrementalHistoricalRecordFlow(record, 2);
				
		flow.startFlow().subscribe(new Subscriber<List<ProteusRealtimeRecord>>() {

			@Override
			public void onCompleted() {
				
			}

			@Override
			public void onError(Throwable arg0) {
				
			}

			@Override
			public void onNext(List<ProteusRealtimeRecord> list) {
				System.out.println(list);
				
			}
		});
	}
}