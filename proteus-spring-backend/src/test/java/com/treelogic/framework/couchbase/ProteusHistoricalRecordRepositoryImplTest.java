package com.treelogic.framework.couchbase;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.treelogic.framework.domain.batch.ProteusHistoricalRecord;
import com.treelogic.framework.domain.batch.ProteusRealtimeRecord;
import com.treelogic.framework.repository.ProteusHistoricalRecordRepository;

import rx.Observable;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles(value="prod")
public class ProteusHistoricalRecordRepositoryImplTest {


    @Autowired
    private ProteusHistoricalRecordRepository proteusRepo;

    @Test
    public void getKeys() {
        List<Integer> keys = proteusRepo.findAllCoilIDs();
        
        assertTrue(keys.size() > 0);
    }

    @Test
    public void findByCoilIdAndProteusRealtimeVarId() {
        int coilid = 40304075;
        int varid = 2;
        List<ProteusHistoricalRecord> list = proteusRepo.findByCoilIdAndProteusRealtimeVarId(coilid, varid);
        
        assertTrue(list.size() > 0);
    }

    @Test
    public void findProteusRealTimeByCoilId() {
        int coilid= 40304075;

        List<ProteusRealtimeRecord> list = proteusRepo.findProteusRealTimeByCoilId(coilid);
        
        list.size();
        
        assertTrue(list.size() > 0);

    }

    @Test
    public void findProteusCalculationsByCoilId() {
        int coilid = 40304075;
        int varid = 2;
        List<ProteusHistoricalRecord.ProteusSimpleMoment> list = proteusRepo.findProteusCalculationsByCoilIdVarId(coilid, varid);
        
        assertTrue(list.size() > 0);
        
    }

}
