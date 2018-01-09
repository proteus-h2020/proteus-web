package com.treelogic.framework.reactive;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.treelogic.framework.controller.websocket.ProteusHistoricalDataController;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles(value="prod")
public class ProteusHistoricalDataControllerTest {

    @Autowired
    private ProteusHistoricalDataController controller;

    @Test
    public void getCoilData() {

        int coilid = 40304075;
        int varid = 4;

        controller.getCoilData(coilid,varid);

    }

    @Test
    public void getRealtimeData() {
        int coilid = 40304075;

        controller.getRealtimeData(coilid);
       
       
    }

    @Test
    public void getRealtimeStream() {
        int coilid = 40304075;
        controller.getRealtimeStream(coilid);
    }
}
