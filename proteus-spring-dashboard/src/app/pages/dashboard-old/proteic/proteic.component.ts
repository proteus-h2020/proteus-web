import { RealtimeChart } from './../../../realtime-chart';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { Colors, Linechart, Scatterplot, Barchart, Heatmap, WebsocketDatasource } from 'proteic';

@Component({
  selector: 'proteic',
  styleUrls: ['./proteic.scss'],
  templateUrl: './proteic.html'
})
export class Proteic implements OnInit, AfterViewInit {

  private id: string;
  private element: any;
  //@Input() private data: any;
  //@Input() private conf: any;
  //@Input() private type: string

  @Input() private chart: RealtimeChart;

  constructor() {
  }

  ngOnInit() {
    this.id = 'proteic' + Date.now().toString();
    this.chart.configuration.marginRight = 200;
    this.chart.configuration.marginLeft = 100;
    this.chart.configuration.selector = '#' + this.id;
    this.chart.configuration.height = 250;
    //this.chart.configuration.colorScale = Colors.category3();
    this.chart.configuration.nullValues = ['NULL', 'NUL', '\\N', NaN, null, 'NaN'];
    // this.conf.propertyY = 'C0007';
    this.chart.configuration.propertyX = 'positionX';
    this.chart.configuration.propertyY = 'value';
    this.chart.configuration.propertyKey = 'key';
    // this.conf.xAxisLabel = 'X Axis Title';
    // this.conf.yAxisLabel = 'Y Axis Title';
    this.chart.configuration.maxNumberOfElements = 1000;
  }

  ngAfterViewInit(): void {
    let c = null;

    switch (this.chart.type) {
      case 'Linechart':
        c = new Linechart([], this.chart.configuration)
          .annotations([
            { type: 'threshold', axis: 'y', value: 35000, text: 'Mean warning' },
            { type: 'threshold', axis: 'y', variable: 'mean', text: 'Mean' },
            { type: 'band', variable: 'mean', width: 'variance', text: 'Variance band' },
          ])
          .datasource(this.chart.websocketEndpoint)
          .unpivot(['mean', 'variance']);
        break;
      case 'Barchart':
        c = new Barchart([], this.chart.configuration).datasource(this.chart.websocketEndpoint);
        break;
      case 'Scatterplot':
        c = new Scatterplot([], this.chart.configuration).datasource(this.chart.websocketEndpoint);
        break;
      case 'Heatmap':
        c = new Heatmap([], this.chart.configuration).datasource(this.chart.websocketEndpoint);
        break;
    }

    this.chart.websocketEndpoint.start();

    /*
    console.log('WEBSOCKEEEET', this.chart.websocketEndpoint);
    let ws = new WebsocketDatasource({endpoint: this.chart.websocketEndpoint});
    let c = null;

    switch (this.chart.type) {
      case 'Linechart':
        c = new Linechart([], this.chart.conf).datasource(ws);
        break;
      case 'Barchart':
        c = new Barchart([], this.chart.conf).datasource(ws);
        break;
      case 'Scatterplot':
        c = new Scatterplot([], this.chart.conf).datasource(ws);
        break;
    }

    ws.start();
    */

  }


}

