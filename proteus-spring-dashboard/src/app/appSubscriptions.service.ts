import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare var SockJS: any;
declare var Stomp: any;


@Injectable()
export class AppSubscriptionsService {

  constructor(private websocketService: WebsocketService) { }

  public getCoil(): void {
    this.websocketService.send(environment.websocketTopics.getters.coil);
  }

  public getCoilData(coilID: number) {
    let endpoint = environment.websocketTopics.getters.batch.coilData + coilID;
    this.websocketService.send(endpoint);
  }

  public getMessages(): void {
    this.websocketService.send(environment.websocketTopics.getters.messages);
  }

  public coilChange(): Observable<any> {
    return this.websocketService
      .subscribe(environment.websocketTopics.coilNotification)
      .map((data: any) => JSON.parse(data));
  }

  public messageCounter(): Observable<any> {
    return this.websocketService
      .subscribe(environment.websocketTopics.messageCounter)
      .map((data: any) => JSON.parse(data));
  }

  public historicalData(): Observable<any> {
    return this.websocketService
      .subscribe(environment.websocketTopics.getters.batch.historicalData)
      .map((data: any) => JSON.parse(data));
  }

  public requestHistoricalData(coilId: number, varId: number) {
    this.websocketService.subscribe(environment.websocketTopics.getters.batch.requestHistorical + coilId + '/' + varId);
  }

  public realtimeData(): Observable<any> {
    return this.websocketService
      .subscribe(environment.websocketTopics.getters.batch.realtimeData)
      .map((data: any) => JSON.parse(data));
  }

  public requestRealtimeData(coilId: number) {
    this.websocketService.subscribe(environment.websocketTopics.getters.batch.requestRealtime + coilId);
  }

  public requestSimpleMomentsData(coilId: number) {
    this.websocketService.subscribe(environment.websocketTopics.getters.batch.requestSimpleMoments + coilId);
  }

  public allCoilIDs(): Observable<any> {
    return this.websocketService
      .subscribe(environment.websocketTopics.getters.batch.allCoilIDs)
      .map((data: any) => JSON.parse(data));
  }

  public requestAllCoilIDs() {
    this.websocketService.subscribe(environment.websocketTopics.getters.batch.requestAllCoilIDs);
  }

  public HSMData(): Observable<any> {
    return this.websocketService
      .subscribe(environment.websocketTopics.getters.batch.HSMData)
      .map((data: any) => JSON.parse(data));
  }

  public requestHSMData(coilId: number) {
    this.websocketService.subscribe(environment.websocketTopics.getters.batch.requestHSM + coilId);
  }
}
