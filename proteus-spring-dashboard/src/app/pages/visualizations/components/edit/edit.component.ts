import { Subscription } from 'rxjs/Rx';
import { RealtimeChart } from './../../../../realtime-chart';
import { ChartService } from './../../../../chart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import 'style-loader!./edit.scss';

@Component({
    selector: 'edit-visualization',
    templateUrl: './edit.html',
})

export class EditVisualizationComponent implements OnInit, OnDestroy {

    private charts: RealtimeChart[];
    private chartsSubscription: Subscription;

    constructor(private chartService: ChartService) {}


    ngOnInit() {
        this.chartsSubscription = this.chartService
                                      .getChartsSubscription()
                                      .subscribe((charts: RealtimeChart[]) => this._handleChartsSubscription(charts));
    }

    ngOnDestroy() {
        if (this.chartsSubscription) {
            this.chartsSubscription.unsubscribe();
        }
    }

    private _handleChartsSubscription(charts: RealtimeChart[]) {
        this.charts = charts;
    }
}
