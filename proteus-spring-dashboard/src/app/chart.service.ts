import { Annotation, AnnotationTypes } from './pages//visualizations/components/annotations/annotation';
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


        calculations = new Array<Calculation>();
        calculations.push(new Calculation('raw', 'Raw'));
        calculations.push(new Calculation('mean', 'Mean'));

        annotations = new Array<Annotation>();
        annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/8');
        endpoints.push('/topic/flink/var/8');

        chart = new RealtimeChart(
            'C0008 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
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
        endpoints.push('/topic/realtime/var/11');
        endpoints.push('/topic/flink/var/11');

        chart = new RealtimeChart(
            'C0011 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "11",
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
        endpoints.push('/topic/realtime/var/12');
        endpoints.push('/topic/flink/var/12');

        chart = new RealtimeChart(
            'C0012 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "12",
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
        endpoints.push('/topic/realtime/var/14');
        endpoints.push('/topic/flink/var/14');

        chart = new RealtimeChart(
            'C0014 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "14",
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
        endpoints.push('/topic/realtime/var/14');
        endpoints.push('/topic/flink/var/14');

        chart = new RealtimeChart(
            'C0014 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "14",
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
        endpoints.push('/topic/realtime/var/23');
        endpoints.push('/topic/flink/var/23');

        chart = new RealtimeChart(
            'C0023 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "23",
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
        endpoints.push('/topic/realtime/var/28');
        endpoints.push('/topic/flink/var/28');

        chart = new RealtimeChart(
            'C0028 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            annotations, // annotations
            "28",
            calculations,
            endpoints,
        );
        chart.alarms = true;

        this.push(chart);


        /** 
                calculations = new Array<Calculation>();
                calculations.push(new Calculation('raw', 'Raw'));
                calculations.push(new Calculation('mean', 'Mean'));
                endpoints = new Array<string>();
                endpoints.push('/topic/realtime/var/25');
        
                chart = new RealtimeChart(
                    'C025 - Raw (2D)',
                    'Heatmap',
                    {
                        propertyX: 'x',
                        propertyY: 'y',
                        propertyZ: 'value',
                        xAxisType: 'categorical',
                        yAxisType: 'linear',
                        maxNumberOfElements: 50,
                    }, //config
                    annotations, // annotations
                    "25",
                    calculations,
                    endpoints,
                );
                chart.alarms = true;
        
                this.push(chart);
        
        
        
        calculations = new Array<Calculation>();
                calculations.push(new Calculation('mean', 'Mean'));
                endpoints = new Array<string>();
                endpoints.push('/topic/flink/var/25');
        
                chart = new RealtimeChart(
                    'C025 - Mean (2D)',
                    'Heatmap',
                    {
                        propertyX: 'x',
                        propertyY: 'y',
                        propertyZ: 'mean',
                        xAxisType: 'categorical',
                        yAxisType: 'linear',
                        maxNumberOfElements: 50,
        
                    }, //config
                    [], // annotations
                    "25",
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