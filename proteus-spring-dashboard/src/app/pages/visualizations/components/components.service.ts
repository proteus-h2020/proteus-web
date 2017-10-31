import { Injectable } from '@angular/core';
import { Annotation } from './annotations/annotation';
import { Statistics } from './statistics/statistics';
import { ComponentSet } from './componentSet';

/**
 * Service class of Components
 * (Annotations, Statistics ..)
 * It stores and serves user-defined config of components when chart is made
 * @class ComponentsService
 */
@Injectable()
export class ComponentsService {

  private components: ComponentSet;

  constructor() {
    this.components = new ComponentSet();
  }

  public getComponents(): Promise<ComponentSet> {
    return Promise.resolve(this.components);
  }

  /**
   * Inject componet by type of config
   * If new option of component adds, we can use other instance methods by scaling out
   * @private
   * @memberof ComponentsService
   */
  private injectComponent(config: any) {
    let component;
    if (config instanceof Annotation) {
        component = this.components.annotations;
    }
    else if (config instanceof Statistics) {
        component = this.components.statistics;
    }
    return component;
  }

  delete(config: any): void {
    let component = this.injectComponent(config);
    const index = component.indexOf(component.find(c => c.id === config.id));
    component.splice(index, 1);

    Promise.resolve(this.components);
  }

  create(config: any): void {
    let component = this.injectComponent(config);
    component.push(config);
  }
}
