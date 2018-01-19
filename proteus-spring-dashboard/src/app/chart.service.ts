import { Annotation, AnnotationTypes } from './pages/visualizations/components/annotations/annotation';
import { Statistics } from './pages/visualizations/components/statistics/statistics';
import { ComponentSet } from './pages/visualizations/components/componentSet';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { RealtimeChart } from './realtime-chart';
import { Colors } from 'proteic';
import { scaleQuantize } from 'd3';

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

        let s = <any>{};

        s.type = 'confidenceBand';
        s.variable = 'mean';
        s.confidence = 'stdDeviation';

        let calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        let components = new ComponentSet();
        // components.annotations.push(a);
        components.statistics.push(s);

        let endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/2');
        endpoints.push('/topic/flink/var/2');

        let mode = 'streaming'; // default value is 'streaming', it also can be set to 'historical', 'hsm'

        let chart = new RealtimeChart(
            'C0002 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
                marginRight: 100,
            },
            components, // components config of annotations, statistics
            '2',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.layout = '12';
        chart.mode = 'streaming';

        this.charts.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');

        components = new ComponentSet();
        components.annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/flink/sax');

        chart = new RealtimeChart(
            'C0002 - SAX',
            'Swimlane',
            {
            marginRight: 160,
            marginLeft: 40,
            xAxisType: 'linear',
            xAxisFormat: '',
            xTicksTextRotation: -65,
            propertyStart: 'x1',
            propertyEnd: 'x2',
            propertyKey: 'classId',
            propertyY: 'classId',
            propertyZ: 'similarity',
            colorScaleType: 'sequential',
            colorScale: scaleQuantize().range([
                '#edf7e7',
                // '#c8e3d2',
                // '#91cdbf',
                '#41b5ab',
                // '#218ba4',
                // '#145d94',
                '#0c3183',
                // '#0d2d76',
                // '#0d2a6a',
                '#0e265e',
                // '#0d2253',
                // '#0c1e47',
                '#0b1a3c',
            ]),
            legendCells: 6,
            legendTitle: 'Similarity',
            displayValues: true,
            valuesFormat: '.4f',
            },
            components,
            '2',
            calculations,
            endpoints,
        );
        chart.layout = '12';
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();
        components.annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/3');
        endpoints.push('/topic/flink/var/3');

        chart = new RealtimeChart(
            'C0003 - Raw / Mean',
            'Linechart',
            {
                marginRight: 100,
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            components,
            '3',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);

        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();
        components.annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/5');
        endpoints.push('/topic/flink/var/5');

        chart = new RealtimeChart(
            'C0005 - Raw / Mean',
            'Linechart',
            {
                marginRight: 100,
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            components,
            '5',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/8');

        chart = new RealtimeChart(
            'C0008 - Raw (2D)',
            'Heatmap',
            {
                marginRight: 160,
                marginLeft: 40,
                propertyX: 'x',
                propertyY: 'y',
                propertyZ: 'value',
                xAxisType: 'linear',
                yAxisType: 'linear',
                xStep: 100,
               // maxNumberOfElements: 20,
                colorScale: scaleQuantize().range([
                '#edf7e7',
                // '#c8e3d2',
                // '#91cdbf',
                '#41b5ab',
                // '#218ba4',
                // '#145d94',
                '#0c3183',
                // '#0d2d76',
                // '#0d2a6a',
                '#0e265e',
                // '#0d2253',
                // '#0c1e47',
                '#0b1a3c',
            ]),
            onClick: (data: any) => window.alert(
              'Value = ' + data.value + ', position(x) = ' + data.x + ', position(y) = ' + data.y
              ),
            }, // config
            components,
            '8',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();
        components.annotations.push(a);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/10');
        endpoints.push('/topic/flink/var/10');

        chart = new RealtimeChart(
            'C0010 - Raw / Mean',
            'Linechart',
            {
                marginRight: 100,
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            components,
            '10',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();
        components.statistics.push(s);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/15');
        endpoints.push('/topic/flink/var/15');

        chart = new RealtimeChart(
            'C0015 - Raw / Mean',
            'Linechart',
            {
                marginRight: 100,
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            components,
            '15',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();
        components.statistics.push(s);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/21');
        endpoints.push('/topic/flink/var/21');

        chart = new RealtimeChart(
            'C0021 - Raw / Mean',
            'Linechart',
            {
                marginRight: 100,
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            components,
            '21',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();
        components.statistics.push(s);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/24');
        endpoints.push('/topic/flink/var/24');

        chart = new RealtimeChart(
            'C0024 - Raw / Mean',
            'Linechart',
            {
                marginRight: 100,
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            components,
            '24',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/25');

        chart = new RealtimeChart(
            'C0025 - Raw (2D)',
            'Heatmap',
            {
                marginRight: 160,
                marginLeft: 40,
                propertyX: 'x',
                propertyY: 'y',
                propertyZ: 'value',
                xAxisType: 'linear',
                yAxisType: 'linear',
                maxNumberOfElements: 20,
                xAxisTicksRotation: -90,
                xStep: 100,
                 colorScale: scaleQuantize().range([
                '#edf7e7',
                // '#c8e3d2',
                // '#91cdbf',
                '#41b5ab',
                // '#218ba4',
                // '#145d94',
                '#0c3183',
                // '#0d2d76',
                // '#0d2a6a',
                '#0e265e',
                // '#0d2253',
                // '#0c1e47',
                '#0b1a3c',
            ]),
            onClick: (data: any) => window.alert(
              'Value = ' + data.value + ',position(x) = ' + data.x + ', position(y) = ' + data.y
              ),
            }, // config
            components,
            '25',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();
        components.statistics.push(s);

        endpoints = new Array<string>();
        endpoints.push('/topic/realtime/var/26');
        endpoints.push('/topic/flink/var/26');

        chart = new RealtimeChart(
            'C0026 - Raw / Mean',
            'Linechart',
            {
                marginRight: 100,
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
            },
            components,
            '26',
            calculations,
            endpoints,
        );
        chart.alarms = true;
        chart.mode = 'streaming';

        this.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');
        calculations.push('mean');

        components = new ComponentSet();

        endpoints = new Array<string>();

        chart = new RealtimeChart(
            'H0002 - Raw / Mean',
            'Linechart',
            {
                propertyX: 'x',
                propertyY: 'value',
                propertyKey: 'key',
                maxNumberOfElements: 1500,
                marginRight: 100,
            },
            components, // components config of annotations, statistics
            '2',
            calculations,
            endpoints,
        );
        chart.coilID = 40304076;
        chart.layout = '12';
        chart.mode = 'historical';

        this.charts.push(chart);

        calculations = new Array<string>();
        calculations.push('raw');

        chart = new RealtimeChart(
            'HSM DATA',
            'ParallelCoordinates',
            {
                propertyKey: 'coilId',
                marginRight: 100,
                legend: true,
                legendPosition: 'right',
            },
            components,
            '',
            calculations,
            endpoints,
        );
        chart.layout = '12';
        chart.mode = 'hsm';
        chart.coilSelectOption = 'add';
        chart.coilIDs = [40304076, 40304079, 40304080, 40304082, 40304085];
        chart.hsmVariables = ['V1825', 'V4018', 'V1827', 'V6679', 'V1829'];

        this.charts.push(chart);


        calculations = new Array<string>();
        calculations.push('raw');

        let coilIDs = [];
        for (let i = 40304076; i < 40304140; i++) {
          coilIDs.push(i);
        }

        chart = new RealtimeChart(
            'HSM DATA - 2',
            'ParallelCoordinates',
            {
                propertyKey: 'coilId',
                marginRight: 100,
                // legend: true,
                legendPosition: 'right',
            },
            components,
            '',
            calculations,
            endpoints,
        );
        chart.layout = '12';
        chart.mode = 'hsm';
        chart.coilSelectOption = 'interval';
        chart.coilIDs = coilIDs;
        chart.hsmVariables = ['V1825', 'V4018', 'V1827', 'V6679', 'V1829'];

        this.charts.push(chart);

    }

    getChart(id: number): RealtimeChart {
        for (let c of this.charts) {
            if (c.id == id) {
                return c;
            }
        }
        return null;
    }

    getCharts(): RealtimeChart[] {
      return this.charts;
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
