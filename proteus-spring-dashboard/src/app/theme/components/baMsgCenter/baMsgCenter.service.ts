import { Injectable } from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    // {
    //   image: 'assets/img/shopping-cart.svg',
    //   text: 'New orders received.',
    //   time: '5 hrs ago'
    // },
  ];

  private _messages = [
    // {
    //   name: 'Nasta',
    //   text: 'After you get up and running, you can place Font Awesome icons just about...',
    //   time: '1 min ago'
    // },
  ];

  public getMessages(): Array<Object> {
    return this._messages;
  }

  public getNotifications(): Array<Object> {
    return this._notifications;
  }
}
