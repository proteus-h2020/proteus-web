import { RealtimeChart } from './../../../realtime-chart';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { Linechart, Scatterplot, Barchart, WebsocketDatasource } from 'proteic';

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
    this.chart.conf.marginRight = 30;
    this.chart.conf.marginLeft = 50;
    this.chart.conf.selector = '#' + this.id;
    this.chart.conf.height = 250;
    // this.conf.propertyY = 'C0007';
    // this.conf.propertyX = 'positionX';
    // this.conf.xAxisLabel = 'X Axis Title';
    // this.conf.yAxisLabel = 'Y Axis Title';
  }

  ngAfterViewInit(): void {
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

    /**
    let ds = new  WebsocketDatasource({ endpoint: 'ws://192.168.4.58:8080/KafkaConsumer/kafkaService' });
    let chart = null;
    switch(this.type) {
      case 'Linechart':
        chart = new  Linechart(this.data, this.conf);
        chart.datasource(ds);
        ds.start();
        break;
      case 'Barchart':
        chart = new Barchart(this.data, this.conf);
        chart.datasource(ds);
        ds.start();
        break;
      case 'Scatterplot':
        chart = new Scatterplot(this.data, this.conf);
        chart.datasource(ds);
        ds.start();
        break;
    }
    **/
  }


}

