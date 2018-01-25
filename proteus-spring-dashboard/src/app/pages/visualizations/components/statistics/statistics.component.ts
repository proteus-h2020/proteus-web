import { Component, OnInit, OnDestroy } from '@angular/core';
import { Statistics, StatisticsTypes } from './statistics';
import { ComponentsService } from '../components.service';
import { ComponentSet } from '../componentSet';
import { ActivatedRoute } from '@angular/router';
import { deepCopy } from '../../../../utils/DeepCopy';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  private selectedStatistics: Statistics; // configurated statistics selected by user
  private newStatistics: Statistics;
  private statistics: Statistics[];
  private statisticsId: number = 1;
  private editConfig: boolean = false; // If false, configuration is shown without edit function

  private id: number = null;

  constructor(
    private componentsService: ComponentsService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => { this.id = parseInt(params['id']); });
  }

  ngOnInit(): void {
    this.id = this.id ? this.id : null; // If id exists, page is edit-visualization

    this.showStatistics(this.id);
  }

  showStatistics(id: number = null): void {
    this.componentsService.getComponents(id)
      .then((components) => this.statistics = components.statistics);
  }

  add(statistics: Statistics): void {
    const modifier = statistics.settings ? statistics.settings : 1;
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
    this.editConfig = true;
    // To prevent it from updating without clicking save button in window
    this.selectedStatistics = deepCopy(statistics);
  }

  update(statistics: Statistics): void {
    const modifier = statistics.settings ? statistics.settings : 1;
    statistics.modifier = (confidence) => modifier * confidence;

    this.componentsService.update(statistics);
    this.selectedStatistics = null;
  }

  showConfiguration(statistics: Statistics): void {
    this.editConfig = false;
    this.selectedStatistics = statistics;
  }

  showCreateForm() {
    this.newStatistics = new Statistics();
  }

  ngOnDestroy() {
    this.componentsService.initialize();
  }
}
