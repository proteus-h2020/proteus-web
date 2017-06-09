import { Subscription } from 'rxjs/Rx';
import { WebsocketService } from './../../../websocket.service';
import { AppSubscriptionsService } from './../../../appSubscriptions.service';

import { RealtimeChart } from './../../../realtime-chart';
import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import {
  Chart,
  Barchart,
  Gauge,
  Heatmap,
  Linechart,
  Scatterplot,
  StackedArea,
  Streamgraph,
  Sunburst,
  Swimlane,
  Colors
} from 'proteic';

@Component({
  selector: 'proteic',
  styleUrls: ['./proteic.scss'],
  templateUrl: './proteic.html',
})
export class Proteic implements OnInit, AfterViewInit, OnDestroy {

  private id: string;
  private element: any;
  private subscriptions: Subscription[] = new Array<Subscription>();


  @Input() private chart: RealtimeChart;

  private proteicChart: Chart;

  constructor(private websocketService: WebsocketService, private appSubscriptionService: AppSubscriptionsService) { }

  ngOnInit() {

    this.id = 'proteic' + Date.now().toString();
    this.chart.configuration.marginRight = 100;
    this.chart.configuration.marginBottom = 50;
    this.chart.configuration.marginLeft = 70;
    this.chart.configuration.marginTop = 35;
    this.chart.configuration.selector = '#' + this.id;
    this.chart.configuration.nullValues = ['NULL', 'NUL', '\\N', NaN, null, 'NaN'];
    this.chart.configuration.propertyX = 'x';
    this.chart.configuration.propertyY = 'value';
    this.chart.configuration.propertyKey = 'key';
    this.chart.configuration.legendPosition = 'top';
    this.chart.configuration.maxNumberOfElements = 800;
  }

  ngAfterViewInit(): void {

    this._subscribeToCoilChange();

    const unpivot = this._calculateUnpivotArray(this.chart);

    switch (this.chart.type) {
      case 'Barchart':
        this.proteicChart = new Barchart([], this.chart.configuration).unpivot(unpivot);
        break;
      case 'Gauge':
        this.proteicChart = new Gauge([], this.chart.configuration).unpivot(unpivot);
        break;
      case 'Heatmap':
        this.proteicChart = new Heatmap([], this.chart.configuration).unpivot(unpivot);
        break;
      case 'Linechart':
        this.proteicChart = new Linechart([], this.chart.configuration).annotations(this.chart.annotations)
          .unpivot(unpivot);
        break;
      case 'Network':
        break;
      case 'Scatterplot':
        this.proteicChart = new Scatterplot([], this.chart.configuration).unpivot(unpivot);
        break;
      case 'StackedArea':
        this.proteicChart = new StackedArea([], this.chart.configuration).unpivot(unpivot);
        break;
      case 'Streamgraph':
        break;
      case 'Sunburst':
        break;
      case 'Swimlane':
        break;
      default:
        break;
    }

      for (const websocketEndpoint of this.chart.endpoints) {
        const subs = this.websocketService.subscribe(websocketEndpoint);
        const subscription = subs.subscribe((data: any) => {
          let json = JSON.parse(data);
          if (typeof json.type !== 'undefined') { //Check if it is a real-time value. If so, add a key.
            json.key = 'VAR' + json.varName;
          }
          this.proteicChart.keepDrawing(json);
        });
        this.subscriptions.push(subscription);
      }
  }

  ngOnDestroy() {
    for (const s of this.subscriptions) {
      s.unsubscribe();
    }
  }


  private _calculateUnpivotArray(chart: RealtimeChart): string[] {
    const unpivot = new Array<string>();
    for (const calculation of this.chart.calculations) {
      if (calculation.value !== 'raw') {
        unpivot.push(calculation.value);
      }
    }
    return unpivot;
  }

  private _subscribeToCoilChange() {
    const coilSubscription = this.appSubscriptionService.coilChange().subscribe(
      (data: any) => this.proteicChart.clear(),
    );
    this.subscriptions.push(coilSubscription);
  }
}

