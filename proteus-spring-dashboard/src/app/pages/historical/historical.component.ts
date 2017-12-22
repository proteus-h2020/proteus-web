import { Subscription } from 'rxjs/Rx';
import { ChartService } from './../../chart.service';
import { RealtimeChart } from './../../realtime-chart';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppSubscriptionsService } from './../../appSubscriptions.service';

@Component({
  selector: 'component-historical',
  styleUrls: ['./historical.scss'],
  templateUrl: './historical.html',
})
export class HistoricalComponent implements OnInit, OnDestroy {


  private coilData: any;
  private coilId: number = 40101001;
  private varId: number = 4;
  private charts: Array<RealtimeChart> = new Array<RealtimeChart>();
  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(
    private appSubscriptionsService: AppSubscriptionsService,
    private chartProteicService: ChartService,
  ) {}

  ngOnInit() {
    const coilDataSubscription = this.appSubscriptionsService.historicalData().subscribe(
      (coilData: any) => {
        this.coilData = coilData;
      },
    );

    const chartsSubscription = this.chartProteicService
    .getChartsSubscription()
    .subscribe((charts: RealtimeChart[]) => {
      this.charts = charts.filter((c: RealtimeChart) => c.coilID !== 'current'); // TODO: filter with rxjs
    });

    this.subscriptions.push(coilDataSubscription);
    this.subscriptions.push(chartsSubscription);

    this._requestHistoricalData(this.coilId, this.varId);

  }


  private _requestHistoricalData(coilId: number, varId: number) {
    this.appSubscriptionsService.requestHistoricalData(coilId, varId);
  }

  ngOnDestroy() {
    for (const s of this.subscriptions) {
      s.unsubscribe();
    }
  }

  /**

  private changeCoilIDSelection(event: any) {
    if(event.target.value){
      let coilID = parseInt(event.target.value, 10);
      this.appSubscriptionsService.getCoilData(coilID);
    }
  }

  **/

}
