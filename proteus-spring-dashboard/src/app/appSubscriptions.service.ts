import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare var SockJS: any;
declare var Stomp: any;


@Injectable()
export class AppSubscriptionsService {

    constructor(private websocketService: WebsocketService) { }


    public subscribeToCoilChange(): Subject<any> {
        return this.websocketService.subscribe(environment.websocketTopics.coilNotification);
    }



}
