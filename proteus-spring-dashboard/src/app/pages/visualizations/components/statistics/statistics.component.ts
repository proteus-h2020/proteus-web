import { Component, OnInit } from '@angular/core';
import { Statistics, StatisticsTypes } from './statistics';
import { ComponentsService } from '../components.service';

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

  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics(): void {
    this.componentsService.getComponents()
      .then((components) => this.statistics = components.statistics);
  }

  add(statistics: Statistics): void {
    let modifier = statistics.settings;
    statistics.modifier = (confidence) => modifier * confidence;
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
