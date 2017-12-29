import { Subscription } from 'rxjs/Rx';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ChartService } from './../../chart.service';
import { RealtimeChart } from './../../realtime-chart';
import { AppSubscriptionsService } from './../../appSubscriptions.service';


@Component({
  selector: 'component-historical',
  styleUrls: ['./historical.scss'],
  templateUrl: './historical.html',
})
export class HistoricalComponent implements OnInit, OnDestroy {

  private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(
    private appSubscriptionsService: AppSubscriptionsService,
    private chartProteicService: ChartService,
    private router: Router,
  ) {}

  ngOnInit() {
    this._initializeSubscriptions();
  }

  ngOnDestroy() {
    for (const s of this.subscriptions) {
      s.unsubscribe();
    }
  }

  removeChart(chart: RealtimeChart) {
    this.chartProteicService.remove(chart);
  }

  editChart(chart: RealtimeChart) {
   const chartId = chart.id;
   this.router.navigate([`pages/visualizations/edit/${chartId}`]);
  }

  private _initializeSubscriptions() {
    const chartsSubscription = this.chartProteicService.getChartsSubscription().subscribe(
      // todo: filter with rxjs
     (charts: RealtimeChart[]) => this.charts = charts.filter((c: RealtimeChart) => c.mode !== 'streaming'),
    );

    this.subscriptions.push(
      chartsSubscription,
    );
  }

  private _requestHistoricalData(coilId: number, varId: number) {
    this.appSubscriptionsService.requestHistoricalData(coilId, varId);
  }

}
