import { Chart } from './chart.interface';

export class RealtimeChart implements Chart {

    constructor(
        public title: string,
        public type: string,
        public conf: any,
        public websocketEndpoint: string
    ) { }

}