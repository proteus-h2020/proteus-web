import { Component } from '@angular/core';

import { SummaryService } from './summary.service';
import 'style-loader!./summary.scss';

@Component({
    selector: 'summary',
    templateUrl: './summary.html'
})
export class Summary {

    public charts: Array<Object>;
    private _init = false;

    constructor(private summaryService: SummaryService) {
        this.charts = this.summaryService.getData();
    }
}
