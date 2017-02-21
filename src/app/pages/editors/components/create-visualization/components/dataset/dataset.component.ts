import { Component } from '@angular/core';
import {DatasetMode} from './dataset-mode-enum';
import 'style-loader!./dataset.scss';

@Component({
    selector: 'dataset',
    templateUrl: './dataset.html',
})

export class Dataset {

    private mode : string = 'realtime';

    constructor() {
    }

}
