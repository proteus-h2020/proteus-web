import { Annotation } from './../../visualizations/components/annotations/annotation';
import { Calculation } from './../../visualizations/VisualizationForm';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Chart } from './../../../chart.interface';
import { Injectable } from '@angular/core';
import { RealtimeChart } from '../../../realtime-chart';

@Injectable()
export class ChartService {

    private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
    private notifier: BehaviorSubject<RealtimeChart[]> = new BehaviorSubject(this.charts);
    private id: number = 1;

    constructor() {
        let calculations = new Array<Calculation>();
        //calculations.add(new Calculation('moments', 'Moments'));
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        let annotations = new Array<Annotation>();
        let endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/3');
        endpoints.push('/topic/flink/var/3');

        let chart = new RealtimeChart(
            'C003 - Raw Data',
            'Linechart',
            {}, //config
            annotations, // annotations
            "3",
            calculations,
            endpoints,
        );

        this.push(chart);

/*
        calculations = new Array<Calculation>();
        calculations.push(new Calculation('mean', 'Mean'));
        annotations = new Array<Annotation>();
        endpoints = new Array<string>();
        endpoints.push('/topic/flink/var/3');

        chart = new RealtimeChart(
            'C003 - Mean & Average',
            'Linechart',
            {}, //config
            annotations, // annotations
            "3",
            calculations,
            endpoints,
        );

        this.push(chart);
        */
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
