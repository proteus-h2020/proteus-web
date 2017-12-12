import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from './../../../notifications.service';

import { Subscription } from 'rxjs/Rx';

import { BaMsgCenterService } from './baMsgCenter.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html',
})
export class BaMsgCenter implements OnInit, OnDestroy {

  private notifications: Array<any> = new Array<any>();

  private subscriptions: Subscription[] = new Array<Subscription>();

  public messages: Array<Object>;

  constructor(
    private _baMsgCenterService: BaMsgCenterService,
    private notificationService: NotificationsService,
) {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

  ngOnInit() {
    this._initializeSubscriptions();
  }

  ngOnDestroy() {
    for (const s of this.subscriptions) {
      s.unsubscribe();
    }
  }

  private _initializeSubscriptions() {
    const notificationsSubs = this.notificationService.get().subscribe(
      (data: Array<any>) => this.notifications = data,
    );

    this.subscriptions.push(
      notificationsSubs,
    );
  }

  public markAllAsRead() {
    this.notificationService.clear();
  }
}
