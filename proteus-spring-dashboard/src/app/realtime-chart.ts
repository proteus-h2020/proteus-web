import { Annotation } from './pages/visualizations/components/annotations/annotation';
import { Calculation } from './pages/visualizations/VisualizationForm';
import { ComponentSet } from './pages/visualizations/components/componentSet';

export class RealtimeChart {

    public static N: number = 1;
    public id: number = 0;
    public alarms: boolean = false;
    public alarmFactor: number = 1;
    public layout: string = '6';

    constructor(
        public title: string,
        public type: string,
        public configuration: any,
        public components: ComponentSet,
        public variable: string,
        public calculations: Calculation[],
        public endpoints: string[],
    ) {
        this.id = RealtimeChart.N++;
    }
}
