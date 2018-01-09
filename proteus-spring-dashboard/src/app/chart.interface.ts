import { WebsocketDatasource } from 'proteic';
export interface Chart{
    title: string;
    type : string;
    conf : any;
    websocketEndpoint ? : WebsocketDatasource;
    data ? : Array<any>;
}
