import { ChartService } from './../../../dashboard/proteic/chart.service';
import { RealtimeChart } from './../../../../realtime-chart';
import { Router } from '@angular/router';
import { BatchChart } from './../../../../batch-chart';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Chart } from '../../../../chart.interface';
import 'style-loader!./create-visualization.scss';
import { DashboardService } from '../../../dashboard/dashboard.service';

import *  as defaultLinechartOptions from '../../../../../../node_modules/proteic/src/utils/defaults/linechart';
import *  as defaultBarchartOptions from '../../../../../../node_modules/proteic/src/utils/defaults/barchart';
import *  as defaultHeatmapOptions from '../../../../../../node_modules/proteic/src/utils/defaults/heatmap';

import { getAvailableVisualizations, Heatmap } from 'proteic';

@Component({
    selector: 'create-visualization',
    templateUrl: './create-visualization.html',
    providers: []
})

export class CreateVisualization implements OnInit, OnDestroy {

    public form: FormGroup;
    private submitted: boolean;
    private events: any[] = [];
    //private availableVisualizations;

    private defaults: any;

    private keyValues: string[] = new Array<string>();


    constructor(
        private _fb: FormBuilder,
        private chartService: ChartService,
        private router: Router
    ) {
        //   console.log(getAvailableVisualizations());
        //   this.availableVisualizations = getAvailableVisualizations();
    }


    save(model: RealtimeChart, isValid: boolean) {
        this.submitted = true; // set form submit to true
        if (isValid) {
            this.chartService.push(model);
            this.router.navigateByUrl('dashboard');
        }

        console.log(isValid, model);
    }

    ngOnInit() {
        this._createForm();

        this.form.controls['type'].valueChanges.subscribe(type => {
            this._changeDefaultProperties(type);
        });
    }

    ngOnDestroy() {
    }

    private _createConfigurationByChartProperties(): FormGroup {
        let form = {};
        for (var property in this.defaults) {
            if (this.defaults.hasOwnProperty(property)) {
                //  form[property] = [this.defaults[property], [<any>Validators.required]]
                form[property] = [this.defaults[property]]

            }
        }
        return this._fb.group(form);
    }


    private _changeDefaultProperties(chartType: string) {
        switch (chartType) {
            case 'Linechart':
                this.defaults = defaultLinechartOptions.defaults;
                break;
            case 'Barchart':
                this.defaults = defaultBarchartOptions.defaults;
                break;
            case 'Heatmap':
                this.defaults = defaultHeatmapOptions.defaults;
                break;
        }

        this.form.setControl('configuration', this._createConfigurationByChartProperties());
    }

    private _createForm() {
        this.form = this._fb.group({
            title: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            type: ['', [<any>Validators.required]],
            configuration: this._createConfigurationByChartProperties(),
            websocketEndpoint: [null, [<any>Validators.required]] //TODO: Add validator starts with 'ws'
        });

    }

    private isDynamicKey(key: string) {
        return key == 'propertyX' ||
            key == 'propertyY' ||
            key == 'propertyKey' ||
            key == 'propertyZ';

    }


    private valueKeysChange(keys: string[]) {
        this.keyValues = keys;
    }

}
