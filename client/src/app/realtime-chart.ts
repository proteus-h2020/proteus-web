import { WebsocketDatasource } from 'proteic';

//export class RealtimeChart implements Chart {
export class RealtimeChart {

    public static N: number = 1;
    public id : number = 0;
    constructor(
        public title: string,
        public type: string,
        public configuration: any,
        public websocketEndpoint: WebsocketDatasource
    ) { 
        this.id = RealtimeChart.N++;
    }



}