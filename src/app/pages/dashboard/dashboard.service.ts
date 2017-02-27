import { Injectable } from '@angular/core';
import { Chart } from '../../chart.interface';
import { RealtimeChart } from '../../realtime-chart';
import { BatchChart } from '../../batch-chart';

import { Observable } from "RxJs/Rx";

@Injectable()
export class DashboardService {

    private charts: Array<Chart> = new Array<Chart>();

    constructor() {
    
        this.charts.push(new RealtimeChart('example', 'Linechart', {}, 'wss://proteicws.herokuapp.com/linechart'));

    }



    getCharts(): Array<Chart> {
        return this.charts;
    }

    push(chart: Chart) {
        this.charts.push(chart);
    }

    remove(chart: Chart) {
        this.charts.splice(this.charts.indexOf(chart), 1);
    }
    edit(chart: Chart) {
        console.log('editing from service', chart);
    }
}