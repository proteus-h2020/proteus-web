import { WebsocketDatasource } from 'proteic';
import { Chart } from './chart.interface';

//export class RealtimeChart implements Chart {
export class RealtimeChart{

    constructor(
        public title: string,
        public type: string,
        public configuration: any,
        public websocketEndpoint: WebsocketDatasource
    ) { }

}