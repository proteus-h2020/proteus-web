import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, layoutPaths } from '../../../theme';

@Injectable()
export class SummaryService {

  private messagesProcessed: number = 0;

  constructor(private _baConfig: BaThemeConfigProvider) {
  }
  
  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Messages Processed',
        stats: this.messagesProcessed,
        icon: 'refresh',
      }, {
        color: pieColor,
        description: 'Defective coils',
        stats: '-',
        icon: 'NO ICON',
      }
    ];
  }
}
