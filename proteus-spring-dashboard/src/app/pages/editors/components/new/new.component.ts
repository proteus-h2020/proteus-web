import { VisualizationForm } from './../../VisualizationForm';
import { FormEditor } from './../../form-editor';
import { ChartService } from './../../../dashboard/proteic/chart.service';
import { RealtimeChart } from './../../../../realtime-chart';
import { Router } from '@angular/router';
// import { BatchChart } from './../../../../batch-chart';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Chart } from '../../../../chart.interface';
import 'style-loader!./new.scss';
import { DashboardService } from '../../../dashboard/dashboard.service';
import { DatasourceService } from '../../../dashboard/proteic/datasource.service';


import { getAvailableVisualizations, Heatmap } from 'proteic';

@Component({
    selector: 'create-visualization',
    templateUrl: '../visualization-form.html',
    providers: []
})

export class CreateVisualization extends VisualizationForm implements OnInit, OnDestroy {

    private events: any[] = [];
    // private type: string;

    constructor(
        private chartService: ChartService,
        private router: Router,
    ) {
        super();
    }


    public save(model: RealtimeChart, isValid: boolean) {
        this.submitted = true;

        if (isValid) {
            // console.log(this.type);
            model = new RealtimeChart(
                model.title, 
                model.type, 
                model.configuration, 
                DatasourceService.getDefault(),
            );
            this.chartService.push(model);
            this.router.navigate(['pages/dashboard']);
        }
    }

    // public setType(model: RealtimeChart, type: string) {
    //     this.type = type;
    //     model.valid = true;
    //     console.log(type);
    // }

    public _createForm() {
        this.form = FormEditor.createForm();
    }
}
