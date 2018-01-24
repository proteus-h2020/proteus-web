import { Injectable } from '@angular/core';
import { Annotation } from './annotations/annotation';
import { Statistics } from './statistics/statistics';
import { ComponentSet } from './componentSet';
import { ChartService } from './../../../chart.service';
/**
 * Service class of Components
 * (Annotations, Statistics ..)
 * It stores and serves user-defined config of components when chart is made
 * @class ComponentsService
 */
@Injectable()
export class ComponentsService {

  /**
  * An array of component set (Annotations, Statistics)
  * Each element is for each chart (differentiated by chart id)
  * Important: chartId of each component set is assigned when chart is created
  * @see realtime-chart.ts @see new.components.ts
  * @private
  * @type {ComponentSet[]}
  * @memberof ComponentsService
  */
  private components: ComponentSet[];

  /**
  * This variable is used for edit-visualization
  * If it is null, components is configured in new-visualization
  * The component set of specific chart can be served by it
  * It is assigned in getComponents() @see getComponents()
  * @private
  * @memberof ComponentsService
  */
  private chartId: number;

  constructor(
    private chartService: ChartService,
  ) {
    this.components = new Array<ComponentSet>();
  }

  /**
   * @method
   * Initialize components config in create-visualization
   * by fitlering remaining components config of uncreated chart
   * @memberof ComponentsService
   */
  public initialize() {
    this.components = this.components.filter((component) => component.chartId != null);
  }

  public getComponents(id: number = null): Promise<ComponentSet> {
    this.cleanComponents();
    let component;
    this.chartId = id;

    component = this.components.find((c) => c.chartId == id);
    if (!component) {
      this.components.push(new ComponentSet());
      component = this.components[this.components.length - 1];
    }

    return Promise.resolve(component);
  }

  /**
   * @method
   * Clean components (annotations, statistics) when its chart was removed
   * @private
   * @memberof ComponentsService
   */
  private cleanComponents() {
    let charts = this.chartService.getCharts();
    let chartIDlist = [];
    for (const i in charts) {
      chartIDlist.push(charts[i].id);
    }

    for (const i in this.components) {
      if (this.components[i].chartId) {
        const id = this.components[i].chartId;
        if (chartIDlist.indexOf(id) == -1) {
          this.components = this.components.filter((component) => component.chartId != id);
        }
      }
    }
  }

  /**
   * @method
   * Inject componet by type of config
   * If new options of component add, we can inject component by scaling out condition statements
   * How to use: @see delete() @see create()
   * @private
   * @memberof ComponentsService
   */
  private injectComponent(config: any) {
    let component;
    if (this.chartId) { // edit
      component = this.components.find((c) => c.chartId == this.chartId);
    } else { // new
      let lastIndex = this.components.length - 1;
      if (lastIndex == -1) {
        this.components.push(new ComponentSet());
        lastIndex++;
      }

      component = this.components[lastIndex];
    }

    if (config instanceof Annotation || config == 'annotations') {
      return component.annotations;
    } else if (config instanceof Statistics || config == 'statistics') {
      return component.statistics;
    }
  }

  /**
  * @method
  * If edit-visualization, get the last id of the component's configuration on already generated chart
  * If new-visualization, it returns 1
  * @memberof ComponentsService
  */
  public getComponentLastId(config: any): number {
    let lastId = 1;
    if (this.chartId) { // edit
      let component = this.injectComponent(config);
      // check component is already configurated
      lastId = component.length >= 1 ? ++component[component.length - 1].id : 1;
    }

    return lastId;
  }

  public delete(config: any): void {
    let component = this.injectComponent(config);
    const index = component.indexOf(component.find(c => c.id === config.id));
    component.splice(index, 1);

    Promise.resolve(this.components);
  }

  public create(config: any): void {
    let component = this.injectComponent(config);
    component.push(config);
  }

  public update(config: any): void {
    let component = this.injectComponent(config);
    const index = component.indexOf(component.find(c => c.id === config.id));
    component[index] = config;

    Promise.resolve(this.components);
  }
}
