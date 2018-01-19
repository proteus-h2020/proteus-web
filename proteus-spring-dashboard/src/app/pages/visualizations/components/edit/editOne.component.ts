import { FormVisualization } from './../../form-visualization';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { RealtimeChart } from './../../../../realtime-chart';
import { ChartService } from './../../../../chart.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { VisualizationForm } from './../../VisualizationForm';
import { AppSubscriptionsService } from './../../../../appSubscriptions.service';
import { environment } from './../../../../../environments/environment';
import { onlyUnique } from '../../../../utils/Array';


@Component({
  selector: 'edit-one-visualization',
  templateUrl: '../visualization-form.html',
  styleUrls: ['./editOne.scss'],
})
export class EditOneVisualizationComponent extends VisualizationForm implements OnInit, OnDestroy {

  private chart: RealtimeChart;
  private paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private chartService: ChartService,
    private router: Router,
    public appSubscriptionsService: AppSubscriptionsService,
  ) {
    super(appSubscriptionsService);
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
                                                  this._handleParamChange(params, 'id');
                                                });
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

    // update model
    this.chart.configuration = model.configuration;
    this.chart.title = model.title;
    this.chart.alarms = model.alarms;
    this.chart.calculations = model.calculations;
    this.chart.variable = model.variable;

    this.chart.coilID = model.coilID;
    this.chart.mode = model.mode;
    this.chart.coilSelectOption = model.coilSelectOption;
    // TODO improve form validation by checking unique value
    this.chart.coilIDs = model.coilIDs ? model.coilIDs.filter(onlyUnique) : null;
    this.chart.hsmVariables = model.hsmVariables ? model.hsmVariables.filter(onlyUnique) : null;

    // TODO Improve: use endpoints in the case of historical and hsm
    if (model.mode == 'streaming') {
      model.endpoints = new Array<string>();
      for (const calc of model.calculations) {
        if (calc == 'raw') {
          model.endpoints.push(environment.websocketTopics.getters.streaming.realtime + model.variable);
        }
        if (calc == 'mean' || calc == 'variance') {
          model.endpoints.push(environment.websocketTopics.getters.streaming.flink.moments + model.variable);
        }
        if (calc == 'sax_vsm') {
          model.endpoints.push(environment.websocketTopics.getters.streaming.flink.sax);
        }
      }
      model.endpoints = model.endpoints.filter(onlyUnique);
    }

    this.chart.endpoints = model.endpoints;

    if (model.coilSelectOption == 'interval') {
      const min = +model.coilIDs[0];
      const max = +model.coilIDs[1];
      model.coilIDs = FormVisualization.availableCoilIDs
                        .filter((availableCoilID) => {
                          return availableCoilID >= min && availableCoilID <= max;
                        });
      this.chart.coilIDs = model.coilIDs;
    }

    if (isValid) {
      this.chartService.update(model);
      if (model.mode === 'streaming') {
        this.router.navigate(['pages/dashboard']);
      } else {
        this.router.navigate(['pages/historical']);
      }
    }
  }

  public _createForm() {
    this.form = FormVisualization.createForm(this.chart);
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
    this.paramsSubscription.unsubscribe();
  }
}
