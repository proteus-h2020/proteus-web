import { FormEditor } from './../../form-editor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { RealtimeChart } from './../../../../realtime-chart';
import { ChartService } from './../../../dashboard/proteic/chart.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { VisualizationForm } from './../../VisualizationForm';

import 'style-loader!./editOne.scss';


@Component({
    selector: 'edit-one-visualization',
    templateUrl: '../visualization-form.html',
})

export class EditOneVisualization extends VisualizationForm {

    private chart: RealtimeChart;
    private paramsSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private chartService: ChartService,
        private router: Router) {
        super();
        this.paramsSubscription = this.route.params.subscribe((params: Params) => this._handleParamChange(params, 'id'));

    }

    private _handleParamChange(params: Params, paramName: string) {
        let id: number = params[paramName];
        this.chart = this.chartService.getChart(id);
        if (this.chart === null) {
            this.router.navigate(['pages/dashboard']);
        }
    }

    public save(model: RealtimeChart, isValid: boolean) {
        this.submitted = true; // set form submit to true

        //update model
        this.chart.configuration = model.configuration;
        this.chart.type = model.type;
        this.chart.websocketEndpoint = model.websocketEndpoint;
        this.chart.title = model.title;

        if (isValid) {
            this.chartService.update(model);
            this.router.navigate(['pages/dashboard']);
        }
    }

    public _createForm() {
        this.form = FormEditor.createForm(this.chart);
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this.paramsSubscription.unsubscribe();
    }
}
