import { Chart } from './chart.interface';

export class BatchChart implements Chart {

    constructor(
        public title: string,
        public type: string,
        public conf: any,
        public data: Array<any>
    ) { }

}