import { DatasourceService } from './proteic/datasource.service';
import { ChartService } from './proteic/chart.service';
import { SelectivePreloadingStrategy } from './../../../selective-preloading-strategy';
import { Component } from '@angular/core';
import { Chart } from '../../chart.interface';
import { DashboardService } from './dashboard.service';
import { RealtimeChart } from '../../realtime-chart';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  private charts: Array<RealtimeChart> = new Array<RealtimeChart>();

  constructor(
    private dashboardChartService: DashboardService,
    private chartProteicService: ChartService,
    private datasourceProteicService: DatasourceService
  ) {
    this.charts = this.chartProteicService.getCharts();
  }

  removeChart(chart: any) {
    this.chartProteicService.remove(chart);
  }

  editChart(chart: any) {
    this.chartProteicService.edit(chart);
  }

}
