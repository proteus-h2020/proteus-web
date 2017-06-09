import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare var SockJS: any;
declare var Stomp: any;


@Injectable()
export class AppSubscriptionsService {

    constructor(private websocketService: WebsocketService) { }


    public coilChange(): Observable<any> {
        return this.websocketService
            .subscribe(environment.websocketTopics.coilNotification)
            .map((data : any) => JSON.parse(data));
    }



}
