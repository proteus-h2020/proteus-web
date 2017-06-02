import { WebsocketService } from './../../../websocket.service';
import { RealtimeChart } from './../../../realtime-chart';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import {
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
  templateUrl: './proteic.html'
})
export class Proteic implements OnInit, AfterViewInit {

  private id: string;
  private element: any;


  @Input() private chart: RealtimeChart;

  constructor(private websocketService: WebsocketService) { }

  ngOnInit() {
    console.log('chart in proteic', this.chart.calculations);

    this.id = 'proteic' + Date.now().toString();
    this.chart.configuration.marginRight = 200;
    this.chart.configuration.marginLeft = 100;
    this.chart.configuration.selector = '#' + this.id;
    this.chart.configuration.height = 250;
    this.chart.configuration.nullValues = ['NULL', 'NUL', '\\N', NaN, null, 'NaN'];
    this.chart.configuration.propertyX = 'x';
    this.chart.configuration.propertyY = 'value';
    this.chart.configuration.propertyKey = 'key';
    this.chart.configuration.maxNumberOfElements = 1000;
  }

  ngAfterViewInit(): void {
    let c = null;

    switch (this.chart.type) {
      case 'Barchart':
        c = new Barchart([], this.chart.configuration).unpivot(['mean', 'variance']);
        break;
      case 'Gauge':
        c = new Gauge([], this.chart.configuration).unpivot(['mean', 'variance']);
        break;
      case 'Heatmap':
        c = new Heatmap([], this.chart.configuration).unpivot(['mean', 'variance']);
        break;
      case 'Linechart':
        c = new Linechart([], this.chart.configuration).annotations(this.chart.annotations).unpivot(['mean', 'variance']);
        break;
      case 'Network':
        break;
      case 'Scatterplot':
        c = new Scatterplot([], this.chart.configuration).unpivot(['mean', 'variance']);
        break;
      case 'StackedArea':
        c = new StackedArea([], this.chart.configuration).unpivot(['mean', 'variance']);

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

    let websocketEndpoint = this.chart.endpoint;


   // console.log('la grafica creada es:', c);

    let subs = this.websocketService.subscribe(websocketEndpoint);
    subs.subscribe((data: any) => {
      let json = JSON.parse(data);
      //console.log('chart ', c);
      //for (let i = 0; i < json.length; i++) {

     // console.log('keep drawing, ', json, 'en', c);
      c.keepDrawing(json);
      // }
    });



  }
}

