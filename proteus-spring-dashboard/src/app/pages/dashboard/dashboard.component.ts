import { AppSubscriptionsService } from './../../appSubscriptions.service';
import { Subscription } from 'rxjs/Rx';
import { RealtimeChart } from '../../realtime-chart';
import { ChartService } from './proteic/chart.service';
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
  private messagesSubscriptions: { [key: string]: Subscription } = {};
  private subscriptions : Subscription[] = new Array<Subscription>();

  //Model
  private coilId : number = 0;



  constructor(
    private dashboardChartService: DashboardService,
    private chartProteicService: ChartService,
    private appSubscriptionService : AppSubscriptionsService,
    private router: Router,
  ) {
    console.log('new dashboard');
  }

  ngOnInit() {
    // Charts subscription 
    const chartsSubscription = this.chartProteicService.getChartsSubscription().subscribe(
      (charts: RealtimeChart[]) => this._onChartSubscription(charts)
    );
    this.subscriptions.push(chartsSubscription)

    // Coil subscription 
    //const coilSubscription = this.appSubscriptionService.subscribeToCoilChange().subscribe(
    //  (data : any) => this.coilId = data.coilId
    //);
    //this.subscriptions.push(coilSubscription);


  

  }


  private _onChartSubscription(charts: RealtimeChart[]) {
    this.charts = charts;
    for (let c of charts) {
      // let subscription: Subscription = c.websocketEndpoint.on('message', () => this.summaryService.incrementMessages());
      //this.messagesSubscriptions[c['title']] = subscription; //TODO : Replace title key
    }

  }

  ngOnDestroy() {
    for(let s of this.subscriptions){
      s.unsubscribe();
    }
  }

  removeChart(chart: RealtimeChart) {
    //let subscription = this.messagesSubscriptions[chart.title];
   // subscription.unsubscribe();
   // this.chartProteicService.remove(chart);
  }

  editChart(chart: RealtimeChart) {
   // let chartId = chart.id;
  //  this.router.navigate([`pages/visualizations/edit/${chartId}`]);
  }

}
