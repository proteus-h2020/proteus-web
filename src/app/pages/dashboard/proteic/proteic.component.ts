import { Component, Input,OnInit,AfterViewInit } from '@angular/core';

import {Linechart, Scatterplot, Barchart,WebsocketDatasource } from 'proteic';

@Component({
  selector: 'proteic',
  styleUrls: ['./proteic.scss'],
  templateUrl: './proteic.html'
})
export class Proteic implements OnInit, AfterViewInit{

  private id: string;
  private element: any;
  @Input() private data: any;
  @Input() private conf: any;
  @Input() private type: string

  constructor() {
  }

  ngOnInit() {
    this.id = 'proteic' + Date.now().toString();
    this.conf.marginRight = 30;
    this.conf.marginLeft = 50;
    this.conf.selector = '#' + this.id;
   // this.conf.propertyY = 'C0007';
   // this.conf.propertyX = 'positionX';
   // this.conf.xAxisLabel = 'X Axis Title';
   // this.conf.yAxisLabel = 'Y Axis Title';
  }

  ngAfterViewInit(): void {
    let chart = null;

    switch(this.type) {
      case 'Linechart':
        chart = new  Linechart(this.data, this.conf);
      //  chart.draw(this.data);
        break;
      case 'Barchart':
        chart = new Barchart(this.data, this.conf);
        break;
      case 'Scatterplot':
        chart = new Scatterplot(this.data, this.conf);
        break;
    }

    chart.draw();

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

