import { Injectable } from '@angular/core';
import { Chart } from '../../chart.interface';
import { RealtimeChart } from '../../realtime-chart';
import { BatchChart } from '../../batch-chart';
import { Observable } from "RxJs/Rx";
import { WebsocketDatasource } from 'proteic';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatasourceHintService {

    private map : Map<WebsocketDatasource,string[]>;


    public push(ds : WebsocketDatasource, valueKeys : string[]){
        this.map.set(ds, valueKeys);
    }

}