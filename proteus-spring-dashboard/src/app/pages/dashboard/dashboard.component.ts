import { AppSubscriptionsService } from './../../appSubscriptions.service';
import { Subscription } from 'rxjs/Rx';
import { RealtimeChart } from '../../realtime-chart';
import { ChartService } from './../../chart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'component-dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

  private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
  private subscriptions: Subscription[] = new Array<Subscription>();
  private coilId: number = 0;

  constructor(
    private dashboardChartService: DashboardService,
    private chartProteicService: ChartService,
    private appSubscriptionService: AppSubscriptionsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this._initializeSubscriptions();
  }


  ngOnDestroy() {
    for(const s of this.subscriptions){
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


  /**
   * It initializes subscriptions to the both chart and data services
   * 
   * @private
   * 
   * @memberOf DashboardComponent
   */
  private _initializeSubscriptions() {

    const chartsSubscription = this.chartProteicService.getChartsSubscription().subscribe(
      (charts: RealtimeChart[]) => this.charts = charts,
    );

    const coilSubscription = this.appSubscriptionService.coilChange().subscribe(
      (data: any) => this.coilId = data.value,
    );

    this.subscriptions.push(
      chartsSubscription,
      coilSubscription,
    );
  }

}
