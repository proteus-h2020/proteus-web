export interface Chart{
    title: string;
    type : string;
    conf : any;
    websocketEndpoint ? : string;
    data ? : Array<any>;
}