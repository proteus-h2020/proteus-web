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

  private coilData: any;
  private coilId: number = 40304075;
  private varId: number = 2;

<<<<<<< HEAD
=======
  private coilData: any;
  private coilId: number = 40101001;
  private varId: number = 4;
>>>>>>> ded134d7ce13a93ff472624229e41ad62a4f00bf
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
    this._requestHistoricalData(this.coilId, this.varId);

    const coilDataSubscription = this.appSubscriptionsService.historicalData().subscribe(
      (coilData: any) => {
        this.coilData = coilData;
      },
    );

<<<<<<< HEAD
    const chartsSubscription = this.chartProteicService.getChartsSubscription().subscribe(
      // todo: filter with rxjs
     (charts: RealtimeChart[]) => this.charts = charts.filter((c: RealtimeChart) => c.coilID !== 'current'),
    );

    this.subscriptions.push(
      coilDataSubscription,
      chartsSubscription,
    );
  }

=======
    const chartsSubscription = this.chartProteicService
    .getChartsSubscription()
    .subscribe((charts: RealtimeChart[]) => {
      this.charts = charts.filter((c: RealtimeChart) => c.coilID !== 'current'); // TODO: filter with rxjs
    });

    this.subscriptions.push(coilDataSubscription);
    this.subscriptions.push(chartsSubscription);

    this._requestHistoricalData(this.coilId, this.varId);

  }


>>>>>>> ded134d7ce13a93ff472624229e41ad62a4f00bf
  private _requestHistoricalData(coilId: number, varId: number) {
    this.appSubscriptionsService.requestHistoricalData(coilId, varId);
  }

<<<<<<< HEAD
=======
  ngOnDestroy() {
    for (const s of this.subscriptions) {
      s.unsubscribe();
    }
  }

>>>>>>> ded134d7ce13a93ff472624229e41ad62a4f00bf
  /**

  private changeCoilIDSelection(event: any) {
    if(event.target.value){
      let coilID = parseInt(event.target.value, 10);
      this.appSubscriptionsService.getCoilData(coilID);
    }
  }

  **/

}
