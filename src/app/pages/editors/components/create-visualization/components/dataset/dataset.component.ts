import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { DatasetMode } from './dataset-mode-enum';
import 'style-loader!./dataset.scss';

@Component({
    selector: 'dataset',
    templateUrl: './dataset.html',
})

export class Dataset {
    
    @Input() private parentGroup: FormGroup;
    private mode: string = 'realtime';

    constructor() {
    }

}
