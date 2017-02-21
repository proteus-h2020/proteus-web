import { Injectable } from '@angular/core';
import { Chart } from '../../chart.interface';
import { RealtimeChart } from '../../realtime-chart';
import { BatchChart } from '../../batch-chart';

import { Observable } from "RxJs/Rx";

@Injectable()
export class DashboardService {

    private charts: Array<Chart> = new Array<Chart>();

    constructor() {
        console.log('INstantiating dashboard service');
        this.charts.push(new BatchChart('Chart Title', 'Linechart', {
            xAxisLabel: 'X Title',
            yAxisLabel: 'Y Title'
        }, [
                { key: 'serie1', x: 1, y: 5 },
                { key: 'serie1', x: 2, y: 15 },
                { key: 'serie1', x: 3, y: 35 },
                { key: 'serie1', x: 4, y: 25 },
                { key: 'serie1', x: 5, y: 12 },
                { key: 'serie1', x: 6, y: 0 },
                { key: 'serie1', x: 7, y: 21 },
                { key: 'serie1', x: 8, y: 0 },
                { key: 'serie2', x: 1, y: 4 },
                { key: 'serie2', x: 2, y: 4 },
                { key: 'serie2', x: 3, y: 20 },
                { key: 'serie2', x: 7, y: 12 },
                { key: 'serie2', x: 5, y: 14 },
                { key: 'serie2', x: 6, y: 9 },
                { key: 'serie2', x: 4, y: 12 },
                { key: 'serie2', x: 8, y: 13 }
            ]));
        this.charts.push(new BatchChart('Chart Title', 'Linechart', {
            xAxisLabel: 'X Title',
            yAxisLabel: 'Y Title'
        }, [
                { key: 'serie1', x: 1, y: 5 },
                { key: 'serie1', x: 2, y: 15 },
                { key: 'serie1', x: 3, y: 35 },
                { key: 'serie1', x: 4, y: 25 },
                { key: 'serie1', x: 5, y: 12 },
                { key: 'serie1', x: 6, y: 0 },
                { key: 'serie1', x: 7, y: 21 },
                { key: 'serie1', x: 8, y: 0 },
                { key: 'serie2', x: 1, y: 4 },
                { key: 'serie2', x: 2, y: 4 },
                { key: 'serie2', x: 3, y: 20 },
                { key: 'serie2', x: 7, y: 12 },
                { key: 'serie2', x: 5, y: 14 },
                { key: 'serie2', x: 6, y: 9 },
                { key: 'serie2', x: 4, y: 12 },
                { key: 'serie2', x: 8, y: 13 }
            ]));

        this.charts.push(new BatchChart('Chart Title', 'Linechart', {
            xAxisLabel: 'X Title',
            yAxisLabel: 'Y Title'
        }, [
                { key: 'serie1', x: 1, y: 5 },
                { key: 'serie1', x: 2, y: 15 },
                { key: 'serie1', x: 3, y: 35 },
                { key: 'serie1', x: 4, y: 25 },
                { key: 'serie1', x: 5, y: 12 },
                { key: 'serie1', x: 6, y: 0 },
                { key: 'serie1', x: 7, y: 21 },
                { key: 'serie1', x: 8, y: 0 },
                { key: 'serie2', x: 1, y: 4 },
                { key: 'serie2', x: 2, y: 4 },
                { key: 'serie2', x: 3, y: 20 },
                { key: 'serie2', x: 7, y: 12 },
                { key: 'serie2', x: 5, y: 14 },
                { key: 'serie2', x: 6, y: 9 },
                { key: 'serie2', x: 4, y: 12 },
                { key: 'serie2', x: 8, y: 13 }
            ]));

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