import { DatasourceHintService } from './../../../dashboard/proteic/datasourceHint.service';
import { DatasourceService } from './../../../dashboard/proteic/datasource.service';
import { Subscription } from 'rxjs/Rx';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DatasetMode } from './dataset-mode-enum';
import { WebsocketDatasource } from 'proteic';
import { extractKeysFromObject } from '../../../../utils/KeyExtractor';
import 'style-loader!./dataset.scss';

@Component({
    selector: 'dataset',
    templateUrl: './dataset.html',
})

export class Dataset implements OnInit {

    @Input() private parentGroup: FormGroup;
    private mode: string = 'realtime';

    private keyValues: string[] = [];

    @Output()
    public keyValuesEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

    private subscriptionToKeyValues: Subscription;

    private datasources: Array<WebsocketDatasource> = new Array<WebsocketDatasource>();

    constructor(private dsService: DatasourceService, private dsHintDataService: DatasourceHintService) {
        this.dsService.get().subscribe(
            (datasources: WebsocketDatasource[]) => this.datasources = datasources
        );
    }


    ngOnInit() {
        this.parentGroup.controls['websocketEndpoint'].valueChanges.subscribe((ws: WebsocketDatasource) => this._collectDatasourceKeys(ws));
    }

    private _collectDatasourceKeys(ws: WebsocketDatasource) {
        if (this.subscriptionToKeyValues) {
            this.subscriptionToKeyValues.unsubscribe();
        }
        this.subscriptionToKeyValues = ws.on('message', (event, message) => this._collectKeys(event, message));
    }

    private _collectKeys(e: any, data: any) {
        this.keyValues = extractKeysFromObject(data);
        this.keyValuesEmitter.emit(this.keyValues);
    }
}
