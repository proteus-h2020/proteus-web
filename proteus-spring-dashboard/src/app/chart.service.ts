import { Annotation, AnnotationTypes } from './pages//visualizations/components/annotations/annotation';
import { Calculation } from './pages/visualizations/VisualizationForm';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { RealtimeChart } from './realtime-chart';
import {Colors} from 'proteic';

@Injectable()
export class ChartService {

    private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
    private notifier: BehaviorSubject<RealtimeChart[]> = new BehaviorSubject(this.charts);
    private id: number = 1;

    constructor() {

        let a = <any>{};

        a.type = 'band';
        a.axis = 'y';
        a.variable = 'mean';
        a.width = 'stdDeviation';
        a.text = '+/- STD';

        let calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        let annotations = new Array<Annotation>();
        annotations.push(a);

        let endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/2');
        endpoints.push('/topic/flink/var/2');

        let chart = new RealtimeChart(
            'C0002 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "2",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.charts.push(chart);


        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/flink/sax');

        chart = new RealtimeChart(
            'C0002 - SAX',
            'Swimlane',
            {
            xAxisType: 'linear',
            xAxisFormat: '',
            propertyStart: 'x1',
            propertyEnd: 'x2',
            propertyKey: 'classId',
            propertyY: 'classId',
            propertyZ: 'similarity',
            colorScaleType: 'sequential',
            colorScale: Colors.sequentialVioletCbInterpolated(),
            legendCells: 6,
            legendTitle: 'Similarity'
            },
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

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/3');
        endpoints.push('/topic/flink/var/3');

        chart = new RealtimeChart(
            'C0003 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
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

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/5');
        endpoints.push('/topic/flink/var/5');

        chart = new RealtimeChart(
            'C0005 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "5",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);



 calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/8');

        chart = new RealtimeChart(
            'C0008 - Raw (2D)',
            'Heatmap',
            {
                propertyX: 'x',
                propertyY: 'y',
                propertyZ: 'value',
                xAxisType: 'categorical',
                yAxisType: 'linear',
                maxNumberOfElements: 20,
            }, //config
            annotations, // annotations
            "8",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);



        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/10');
        endpoints.push('/topic/flink/var/10');

        chart = new RealtimeChart(
            'C0010 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "10",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);

        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/15');
        endpoints.push('/topic/flink/var/15');

        chart = new RealtimeChart(
            'C0015 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "15",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);

        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/21');
        endpoints.push('/topic/flink/var/21');

        chart = new RealtimeChart(
            'C0021 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "21",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);

        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/24');
        endpoints.push('/topic/flink/var/24');

        chart = new RealtimeChart(
            'C0024 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "24",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);

calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/25');

        chart = new RealtimeChart(
            'C0025 - Raw (2D)',
            'Heatmap',
            {
                propertyX: 'x',
                propertyY: 'y',
                propertyZ: 'value',
                xAxisType: 'categorical',
                yAxisType: 'linear',
                maxNumberOfElements: 20,
                xAxisTicksRotation: -90
            }, //config
            annotations, // annotations
            "25",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);


        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/26');
        endpoints.push('/topic/flink/var/26');

        chart = new RealtimeChart(
            'C0026 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "26",
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