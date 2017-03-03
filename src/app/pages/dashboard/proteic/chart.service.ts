import { Subject } from 'rxjs/Subject';
import { Chart } from './../../../chart.interface';
import { Injectable } from '@angular/core';
import { RealtimeChart } from '../../../realtime-chart';

import { Observable } from "RxJs/Rx";

@Injectable()
export class ChartService {

    private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
    private notifier: Subject<RealtimeChart> = new Subject();

    constructor() {
      //  this.charts.push(new RealtimeChart('example', 'Linechart', {}, 'wss://proteicws.herokuapp.com/linechart'));
    }

    getCharts(): Array<RealtimeChart> {
        return this.charts;
    }

    push(chart: RealtimeChart) {
        this.charts.push(chart);
        this.notifier.next();
    }

    remove(chart: RealtimeChart) {
        this.charts.splice(this.charts.indexOf(chart), 1);
        this.notifier.next();
    }


    edit(chart: RealtimeChart) {
        console.log('editing from service', chart);
    }
}