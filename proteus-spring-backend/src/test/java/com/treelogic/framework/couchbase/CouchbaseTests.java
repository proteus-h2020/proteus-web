package com.treelogic.framework.couchbase;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.google.common.collect.Lists;
import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.repository.ProteusHistoricalRecordRepository;

import ch.qos.logback.classic.Logger;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.List;

import org.junit.Before;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles(value="test")
public class CouchbaseTests {

	@Autowired
	private ProteusHistoricalRecordRepository proteusRepo;
	
	@Before
	public void initializeBucket(){
		proteusRepo.deleteAll();
	}
	
	@Test
	public void testCounter(){
		long counter = proteusRepo.count();
		assertEquals(counter, 0);
	}
	
	
	@Test
	public void insertAndFindOne(){
		ProteusHistoricalRecord record = new ProteusHistoricalRecord(40105106);
		
		proteusRepo.save(record);
		
		ProteusHistoricalRecord found = proteusRepo.findOne(40105106);
		assertTrue(found.getCoilId() > 0 && found.getCoilId() == record.getCoilId());
	}
	
	@Test
	public void findKeys(){
		ProteusHistoricalRecord record1 = new ProteusHistoricalRecord(40105106);
		ProteusHistoricalRecord record2 = new ProteusHistoricalRecord(40105101);
		ProteusHistoricalRecord record3 = new ProteusHistoricalRecord(40105103);
		
		proteusRepo.save(Arrays.asList(new ProteusHistoricalRecord[]{record1, record2, record3}));
		
		List<Integer> keys = proteusRepo.findAllCoilIDs();
		
		System.out.println("KEEEEEEEEEEEEYS:  " + keys);
	}
	
	
	
	
	
}
