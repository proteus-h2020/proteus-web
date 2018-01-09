import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'select-visualization',
    templateUrl: './select.html',
    providers: []
})

export class SelectVisualizationComponent implements OnInit, OnDestroy {


    constructor(private router: Router) { }

    ngOnInit() { }

    ngOnDestroy() { }

    public goToCreationPanel() {
        this.router.navigateByUrl('/pages/visualizations/new');
    }
}
