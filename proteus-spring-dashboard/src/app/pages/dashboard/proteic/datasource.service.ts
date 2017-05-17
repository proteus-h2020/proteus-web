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
    static defaultDatasource = new WebsocketDatasource(new WebSocket('ws://localhost:3000/'));

    constructor() {
        let ws = new WebSocket('ws://localhost:3000/');
        let ds = new WebsocketDatasource(ws);
        this.notifier = new BehaviorSubject([ds]);
        this.push(new WebsocketDatasource(ws));
    }

    static getDefault() {
        return this.defaultDatasource;
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
