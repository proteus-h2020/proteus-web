import { Component, OnInit } from '@angular/core';
import { Statistics, StatisticsTypes } from './statistics';
import { ComponentsService } from '../components.service';
import { ComponentSet } from '../componentSet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  selectedStatistics: Statistics;
  newStatistics: Statistics;
  statistics: Statistics[];
  statisticsId: number = 1;

  constructor(
    private componentsService: ComponentsService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    let id;
    if (this.route.url != '/pages/visualizations/new') { // edit
      id = +this.route.url.split('/').pop();
    }

    this.showStatistics(id);
  }

  showStatistics(id: number = null): void {
    this.componentsService.getComponents(id)
      .then((components) => this.statistics = components.statistics);
  }

  add(statistics: Statistics): void {
    let modifier = statistics.settings ? statistics.settings : 1;
    statistics.modifier = (confidence) => modifier * confidence;

    this.statisticsId = this.componentsService.getComponentLastId(statistics);
    statistics.id = this.statisticsId++;
    this.componentsService.create(statistics);
    this.newStatistics = null;
  }

  cancel(): void {
      if (this.newStatistics) {
          this.newStatistics = null;
      }
      if (this.selectedStatistics) {
          this.selectedStatistics = null;
      }
  }

  delete(statistics: Statistics): void {
    this.componentsService.delete(statistics);
  }

  edit(statistics: Statistics): void {
    this.selectedStatistics = statistics;
  }

  create(statistics: Statistics): void {
    this.selectedStatistics = null;
  }

  showCreateForm() {
    this.newStatistics = new Statistics();
  }

}
