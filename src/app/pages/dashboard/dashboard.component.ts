import { SelectivePreloadingStrategy } from './../../../selective-preloading-strategy';
import { Component } from '@angular/core';
import { Chart } from '../../chart.interface';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  private charts: Array<Chart> = new Array<Chart>();

  constructor(private dashboardChartService: DashboardService) {
    this.charts = this.dashboardChartService.getCharts();
        console.log(this.charts, 'creando instancia ed dashboard);');

  }

  removeChart(chart: any) {
    this.dashboardChartService.remove(chart);
  }

  editChart(chart: any) {
    this.dashboardChartService.edit(chart);
  }

}
