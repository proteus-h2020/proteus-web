import { Annotation } from './pages/visualizations/components/annotations/annotation';
import { Calculation } from './pages/visualizations/VisualizationForm';

export class RealtimeChart {

    public static N: number = 1;
    public id: number = 0;
    constructor(
        public title: string,
        public type: string,
        public configuration: any,
        public annotations: Annotation[],  
        public variable: string,
        public calculations: Set<Calculation>, 
        public endpoint: string,
    ) { 
        this.id = RealtimeChart.N++;
    }



}