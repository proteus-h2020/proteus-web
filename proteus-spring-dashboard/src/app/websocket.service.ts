import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare var SockJS: any;
declare var Stomp: any;

@Injectable()
export class WebsocketService {

    private socket: any;
    private stomp: any;
    private connected: boolean = false;
    private subject: Subject<any>;
    private observable: Observable<any>;
    private connectionPromise: Promise<any>;

    constructor() {
        console.debug('Initializing socksjs and stom connection to the server');
    }

    public send(endpoint: string, message?: string) {
        this.connectionPromise.then(() => {
            this.stomp.send(endpoint, {}, {});
        });
    }

    public subscribe(url: string): Subject<any> {
        const subject = new Subject();

        this.connectionPromise.then(() => {
            this.stomp.subscribe(url, (msg) => {
                const body = msg.body;
                subject.next(body);
            });
        });
        return subject;
    }

    private onConnect() {
        console.log('Connected to the PROTEUS websocket', this);
        // subscribe to the PROTEUS app notifications
        this.connected = true;
    }

    private onError(error: string) {
        console.error('Error with the PROTEUS websocket', error);
        this.connected = false;
        setTimeout(() => this.initialize(), environment.wsReconnectionTime);
        console.log('STOMP: Reconecting in 10 seconds');
    }

    initialize(): Promise<any> {
        if (!this.connected) {
            return this.connectionPromise = new Promise((resolve, reject) => {
                this.socket = new SockJS(environment.wsEndpoint);
                this.stomp = Stomp.over(this.socket);
                this.stomp.heartbeat.outgoing = 10000;
                this.stomp.heartbeat.incoming = 10000;
                this.stomp.debug = true;
                this.stomp.connect({},
                    () => {
                        this.onConnect();
                        resolve('Connection  to ' + this.socket + ' has been successful');
                    },
                    (e: any ) => {
                        this.onError('Error connecting to the ws ' + e);
                        reject('Error connecting to ' + environment.wsEndpoint);
                    });
            });
        } else {
            return null;
        }
    }
}
