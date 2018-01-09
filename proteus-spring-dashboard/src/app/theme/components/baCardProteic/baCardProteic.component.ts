import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ba-card-proteic',
  styleUrls: ['./baCardProteic.scss'],
  templateUrl: './baCardProteic.html',
})
export class BaCardProteic {
  @Input() chart: any;
  @Input() baCardClass: String;
  @Input() cardType: String;
  @Output('removeChart') removeChartEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output('editChart') editChartEventEmitter: EventEmitter<any> = new EventEmitter<any>();


  remove() {
    this.removeChartEventEmitter.emit(this.chart);
  }

  edit() {
    this.editChartEventEmitter.emit(this.chart);
  }
}
