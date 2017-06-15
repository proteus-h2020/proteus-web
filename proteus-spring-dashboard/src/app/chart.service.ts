import { Annotation,AnnotationTypes } from './pages//visualizations/components/annotations/annotation';
import { Calculation } from './pages/visualizations/VisualizationForm';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { RealtimeChart } from './realtime-chart';

@Injectable()
export class ChartService {

    private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
    private notifier: BehaviorSubject<RealtimeChart[]> = new BehaviorSubject(this.charts);
    private id: number = 1;

    constructor() {

                let a = <any>{};

        a.type='band';
        a.axis='y';
        a.variable='mean';
        a.width='stdDeviation';
        a.text='+/- STD';



        let calculations = new Array<Calculation>();
        //calculations.add(new Calculation('moments', 'Moments'));
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        let annotations = new Array<Annotation>();
                annotations.push(a);

        let endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/3');
        endpoints.push('/topic/flink/var/3');

        let chart = new RealtimeChart(
            'C003 - Raw / Mean',
            'Linechart',
            {}, //config
            annotations, // annotations
            "3",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);


        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));
        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/44');
        endpoints.push('/topic/flink/var/44');

        chart = new RealtimeChart(
            'C044 - Raw / Mean',
            'Linechart',
            {}, //config
            annotations, // annotations
            "44",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);

        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));
        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/34');
        endpoints.push('/topic/flink/var/34');

        chart = new RealtimeChart(
            'C0034 - Raw / Mean',
            'Linechart',
            {}, //config
            annotations, // annotations
            "34",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);


        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));
        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/26');
        endpoints.push('/topic/flink/var/26');

        chart = new RealtimeChart(
            'C0026 - Raw / Mean',
            'Linechart',
            {}, //config
            annotations, // annotations
            "26",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);

        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));
/**
 * 
 *     id: number;
    text: string;
    type: AnnotationTypes;
    settings: any;
    axis: string;
    value: number;
    variable: number;
    width: string;
 */

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/2');
        endpoints.push('/topic/flink/var/2');



        chart = new RealtimeChart(
            'C0002 - Raw / Mean',
            'Linechart',
            {}, //config
            annotations, // annotations
            "2",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);


                calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));
/**
 * 
 *     id: number;
    text: string;
    type: AnnotationTypes;
    settings: any;
    axis: string;
    value: number;
    variable: number;
    width: string;
 */

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/32');
        endpoints.push('/topic/flink/var/32');



        chart = new RealtimeChart(
            'C0032 - Raw / Mean',
            'Linechart',
            {}, //config
            annotations, // annotations
            "32",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);

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