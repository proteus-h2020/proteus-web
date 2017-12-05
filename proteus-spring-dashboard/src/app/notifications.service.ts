import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationsService {

    private nofitications: Array<any> = new Array<any>();
    private notificator: Subject<any> = new Subject<any>();

    public get() {
        return this.notificator;
    }

    public push(alert: any) {
        this.nofitications.push(alert);
        this.notificator.next(this.nofitications);
    }

    public clear() {
        this.nofitications = new Array<any>();
        this.notificator.next(this.nofitications);
    }
}
