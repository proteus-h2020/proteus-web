import { Annotation } from './annotations/annotation';
import { Statistics } from './statistics/statistics';

export class ComponentSet {
  public annotations: Annotation[] = new Array<Annotation>();
  public statistics: Statistics[] = new Array<Statistics>();
  public chartId: number;
}
