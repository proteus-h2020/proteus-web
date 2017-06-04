import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

declare var SockJS: any;
declare var Stomp: any;

@Injectable()
export class WebsocketService {


    private socket: any;
    private stomp: any;
    private connected: boolean = false;


    constructor() {
        console.debug('Initializing socksjs and stom connection to the server');
    }


    public subscribe(url: string): Subject<any> {
        const subject = new Subject();
        this.stomp.subscribe(url, (msg) => {
            const body = msg.body;
            subject.next(body);
        });
        return subject;

    }

    private onConnect() {
        console.debug('Connected to the PROTEUS websocket');
        //subscribe to the PROTEUS app notifications
        this.connected = true;
    }

    private onError(error: string) {
        console.error('Error with the PROTEUS websocket', error);
        window.alert('Cannot connect to the PROTEUS server: ' + error.toString());
        this.connected = false;
    }

    initialize() {
        this.socket = new SockJS('http://localhost:8080/wsEndpoint');
        this.stomp = Stomp.over(this.socket);
        this.stomp.heartbeat.outgoing = 10000;
        this.stomp.heartbeat.incoming = 10000;
        this.stomp.debug = false;
        this.stomp.connect({}, this.onConnect, this.onError);
    }

}
