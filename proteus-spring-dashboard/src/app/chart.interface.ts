import { WebsocketDatasource } from '@proteus-h2020/proteic';
export interface Chart {
    title: string;
    type: string;
    conf: any;
    websocketEndpoint?: WebsocketDatasource;
    data?: Array<any>;
}
