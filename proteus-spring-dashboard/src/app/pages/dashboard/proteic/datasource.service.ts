import { Injectable } from '@angular/core';
// import { Chart } from '../../chart.interface';
// import { RealtimeChart } from '../../realtime-chart';
// import { BatchChart } from '../../batch-chart';
// import { Observable } from "RxJs/Rx";
import { WebsocketDatasource } from 'proteic';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatasourceService {

    private datasources: Array<WebsocketDatasource> = new Array<WebsocketDatasource>();
    private notifier: BehaviorSubject<WebsocketDatasource[]>;

    constructor() {
        let ws = new WebSocket('ws://192.168.3.31:8081/KafkaConsumer/kafkaService');
        let ds = new WebsocketDatasource(ws);
        this.notifier = new BehaviorSubject([ds]);
        this.push(new WebsocketDatasource(ws));

        ws = new WebSocket('wss://proteicws.herokuapp.com/linechart');


        ds = new WebsocketDatasource(ws);
        this.push(new WebsocketDatasource(ws));

        ws = new WebSocket('wss://proteicws.herokuapp.com/barchart');
        ds = new WebsocketDatasource(ws);
        this.push(new WebsocketDatasource(ws));

        ws = new WebSocket('wss://proteicws.herokuapp.com/gauge');
        ds = new WebsocketDatasource(ws);
        this.push(new WebsocketDatasource(ws));

        ws = new WebSocket('wss://proteicws.herokuapp.com/scatterplot');
        ds = new WebsocketDatasource(ws);
        this.push(new WebsocketDatasource(ws));

        ws = new WebSocket('wss://proteicws.herokuapp.com/streamgraph');
        ds = new WebsocketDatasource(ws);
        this.push(new WebsocketDatasource(ws));

        ws = new WebSocket('wss://proteicws.herokuapp.com/matrix');
        ds = new WebsocketDatasource(ws);
        this.push(new WebsocketDatasource(ws));

        ws = new WebSocket('wss://demo-proteus.herokuapp.com/coil');
        ds = new WebsocketDatasource(ws);
        this.push(new WebsocketDatasource(ws));

    }

    push(ds: WebsocketDatasource) {
        this.datasources.push(ds);
        this.notifier.next(this.datasources);
    }

    remove(ds: WebsocketDatasource) {
        this.datasources.splice(this.datasources.indexOf(ds), 1);
        this.notifier.next(this.datasources);
    }

    edit(ds: WebsocketDatasource) {
        console.log('editing from service', ds);
    }

    get() {
        return this.notifier;
    }
}
