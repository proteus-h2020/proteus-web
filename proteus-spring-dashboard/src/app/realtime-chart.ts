import { Annotation } from './pages/visualizations/components/annotations/annotation';
import { ComponentSet } from './pages/visualizations/components/componentSet';

export class RealtimeChart {

  public static N: number = 1;
  public id: number = 0;
  public alarms: boolean = false;
  public alarmFactor: number = 1;
  public layout: string = '6';
  public coilID: number;
  public mode: string = 'streaming';
  public coilSelectOption: string;
  public coilIDs: number[];
  public hsmVariables: string[];

  constructor(
    public title: string,
    public type: string,
    public configuration: any,
    public components: ComponentSet,
    public variable: string,
    public calculations: string[],
    public endpoints: string[],
  ) {
    this.id = RealtimeChart.N++;
    this.components.chartId = this.id;
  }
}
