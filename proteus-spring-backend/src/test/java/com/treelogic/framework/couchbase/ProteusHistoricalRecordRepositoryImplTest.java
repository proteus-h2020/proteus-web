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

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles(value="prod")
public class ProteusHistoricalRecordRepositoryImplTest {


    @Autowired
    private ProteusHistoricalRecordRepository proteusRepo;

    @Test
    public void getKeys() {
        List<Integer> keys = proteusRepo.findKeys();
        
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
        int coilid= 40304075;
        List<ProteusHistoricalRecord.ProteusSimpleMoment> list = proteusRepo.findProteusCalculationsByCoilId(coilid);
        
        assertTrue(list.size() > 0);
        
    }

    @Test
    public void findHSM() {
        int[] coilid = new int[] {40304075, 40304076, 40304078};
        List<Map<String, Object>> list = proteusRepo.findProteusHSMByCoilId(coilid);
        
        assertTrue(list.size() > 0);

        int[] uniqcoil = new int[] {40304075};
        list = proteusRepo.findProteusHSMByCoilId(uniqcoil);
        
        list.size();
        
        assertTrue(list.size() > 0);
    }
}
