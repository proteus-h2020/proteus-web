import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { SummaryService } from './summary.service';
import 'style-loader!./summary.scss';

@Component({
    selector: 'summary',
    templateUrl: './summary.html'
})
export class Summary implements OnInit, OnDestroy {

    private messages: number = 0;

    private messagesSubscription: Subscription;
    private _init = false;

    constructor(private summaryService: SummaryService) {

    }

    ngOnInit() {
        this.messagesSubscription = this.summaryService.messagesSubscriptor().subscribe(
            (messages: number) => this.messages = messages
        );
    }

    ngOnDestroy() {
        if (this.messagesSubscription) {
            this.messagesSubscription.unsubscribe();
        }
    }
}


