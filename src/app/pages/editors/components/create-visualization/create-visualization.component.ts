import { Router } from '@angular/router';
import { BatchChart } from './../../../../batch-chart';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Chart } from '../../../../chart.interface';
import 'style-loader!./create-visualization.scss';
import {DashboardService} from '../../../dashboard/dashboard.service';

import *  as defaultLinechartOptions from '../../../../../../node_modules/proteic/src/utils/defaults/linechart';
import *  as defaultBarchartOptions from '../../../../../../node_modules/proteic/src/utils/defaults/barchart';
import {getAvailableVisualizations} from 'proteic';

@Component({
    selector: 'create-visualization',
    templateUrl: './create-visualization.html',
    providers: []
})

export class CreateVisualization implements OnInit {

    public form: FormGroup;
    private submitted: boolean;
    private events: any[] = [];
    //private availableVisualizations;
    
    private defaults: any;


    constructor(
        private _fb: FormBuilder,
        private dashboardService : DashboardService,
        private router : Router
    ) {
     //   console.log(getAvailableVisualizations());
     //   this.availableVisualizations = getAvailableVisualizations();
    }


    save(model: Chart,  isValid: boolean) {
        this.submitted = true; // set form submit to true
        if(isValid){
            this.dashboardService.push(new BatchChart(model.title, model.type, model.conf, []));
            this.router.navigateByUrl('dashboard');
        }

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid, model.constructor.name);
    }

    ngOnInit() {
        this.form = this._fb.group({
            title: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            type: ['', [<any>Validators.required]],
            conf: [{},[]]
        });
    }


    private changeDefaultProperties(chartType: string) {
        switch (chartType) {
            case 'Linechart':
                this.defaults = defaultLinechartOptions.defaults;
                break;
            case 'Barchart':
                this.defaults = defaultBarchartOptions.defaults;
                break;
        }
    }



}
