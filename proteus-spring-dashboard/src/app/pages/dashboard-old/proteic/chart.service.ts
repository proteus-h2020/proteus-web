import { DatasourceService } from './datasource.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Chart } from './../../../chart.interface';
import { Injectable } from '@angular/core';
import { RealtimeChart } from '../../../realtime-chart';

// import { Observable } from "RxJs/Rx";

@Injectable()
export class ChartService {

    private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
    private notifier: BehaviorSubject<RealtimeChart[]> = new BehaviorSubject(this.charts);
    private id: number = 1;
    constructor() {
    }

    getChart(id: number): RealtimeChart {
        for (let c of this.charts) {
            if (c.id == id) {
                return c;
            }
        }
        return null;
    }

    getChartsSubscription(): Subject<RealtimeChart[]> {
        return this.notifier;
    }

    push(chart: RealtimeChart) {
        this.charts.push(chart);
        this.notifier.next(this.charts);
    }

    update(chart: RealtimeChart) {
        for (let i in this.charts) {
            if (this.charts[i].id == chart.id) {
                this.charts[i] = chart;
                this.notifier.next(this.charts);
                break;
            }
        }
    }

    remove(chart: RealtimeChart) {
        this.charts.splice(this.charts.indexOf(chart), 1);
        this.notifier.next(this.charts);
    }

    edit(chart: RealtimeChart) {
        console.log('editing from service', chart);
    }
}
