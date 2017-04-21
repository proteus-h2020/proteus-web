import { SummaryService } from './summary/summary.service';
import { Subscription } from 'rxjs/Rx';
import { RealtimeChart } from './../../realtime-chart';
import { DatasourceService } from './proteic/datasource.service';
import { ChartService } from './proteic/chart.service';
import { SelectivePreloadingStrategy } from './../../../selective-preloading-strategy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Chart } from '../../chart.interface';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit, OnDestroy {

  private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
  private chartsSubscription: Subscription;
  private messagesSubscriptions: { [key: string]: Subscription } = {};

  constructor(
    private dashboardChartService: DashboardService,
    private chartProteicService: ChartService,
    private datasourceProteicService: DatasourceService,
    private summaryService: SummaryService,
    private router: Router
  ) {
    console.log('new dashboard');

  }

  ngOnInit() {
    this.chartsSubscription = this.chartProteicService.getChartsSubscription().subscribe(
      (charts: RealtimeChart[]) => this._onChartSubscription(charts)
    );
  }


  private _onChartSubscription(charts: RealtimeChart[]) {
    this.charts = charts;
    for (let c of charts) {
      let subscription: Subscription = c.websocketEndpoint.on('message', () => this.summaryService.incrementMessages());
      this.messagesSubscriptions[c['title']] = subscription; //TODO : Replace title key
    }

  }

  ngOnDestroy() {
    if (this.chartsSubscription) {
      this.chartsSubscription.unsubscribe();
    }

  }

  removeChart(chart: RealtimeChart) {
    let subscription = this.messagesSubscriptions[chart.title];
    subscription.unsubscribe();
    this.chartProteicService.remove(chart);
  }

  editChart(chart: RealtimeChart) {
    let chartId = chart.id;
    this.router.navigate([`pages/editors/edit/${chartId}`]);
  }

}
