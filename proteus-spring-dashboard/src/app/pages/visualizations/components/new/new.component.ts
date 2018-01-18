import { FormVisualization } from './../../form-visualization';
import { ChartService } from './../../../../chart.service';
import { RealtimeChart } from './../../../../realtime-chart';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Chart } from '../../../../chart.interface';
import { VisualizationForm } from 'app/pages/visualizations/VisualizationForm';
import { ComponentsService } from '../../components/components.service';
import { ComponentSet } from '../../components/componentSet';
import { AppSubscriptionsService } from './../../../../appSubscriptions.service';
import { environment } from './../../../../../environments/environment';
import { onlyUnique } from '../../../../utils/Array';

@Component({
  selector: 'create-visualization',
  templateUrl: '../visualization-form.html',
  styleUrls: ['./new.scss'],
})
export class CreateVisualizationComponent extends VisualizationForm implements OnInit, OnDestroy {

  constructor(
    private chartService: ChartService,
    private router: Router,
    private componentsService: ComponentsService,
    public appSubscriptionsService: AppSubscriptionsService,
  ) {
    super(appSubscriptionsService);
  }

  public save(model: RealtimeChart, isValid: boolean) {
    let self = this;
    let alarms = model.alarms;
    let coilID = model.coilID;
    let mode = model.mode;
    let endpoints = new Array<string>();
    let coilIDs = model.coilIDs.filter(onlyUnique);
    let hsmVars = model.hsmVariables.filter(onlyUnique);
    let coilSelectOption = model.coilSelectOption;
    this.submitted = true;

    // TODO Improve: use endpoints in the case of historical and hsm
    if (model.mode == 'streaming') {
      for (const calc of model.calculations) {
        if (calc == 'raw') {
          endpoints.push(environment.websocketTopics.getters.streaming.realtime + model.variable);
        }
        if (calc == 'mean' || calc == 'variance') {
          endpoints.push(environment.websocketTopics.getters.streaming.flink.moments + model.variable);
        }
        if (calc == 'sax_vsm') {
          endpoints.push(environment.websocketTopics.getters.streaming.flink.sax);
        }
      }
    }

    endpoints = endpoints.filter(onlyUnique);

    if (coilSelectOption == 'interval') {
      const min = +coilIDs[0];
      const max = +coilIDs[1];
      coilIDs.pop();
      for (let i = min + 1; i < max + 1; i++) {
        if (FormVisualization.availableCoilIDs.indexOf(i) > -1) {
          coilIDs.push(i);
        }
      }
    }

    function createChart(components: ComponentSet) {
      model = new RealtimeChart(
        model.title,
        model.type,
        model.configuration,
        components,
        model.variable,
        model.calculations,
        endpoints,
      );
      model.alarms = alarms;
      model.coilID = coilID;
      model.mode = mode;
      model.coilSelectOption = coilSelectOption;
      model.coilIDs = coilIDs;
      model.hsmVariables = hsmVars;

      self.chartService.push(model);
      if (model.mode === 'streaming') {
        self.router.navigate(['pages/dashboard']);
      } else {
        self.router.navigate(['pages/historical']);
      }
    }

    if (isValid) {
      this.componentsService.getComponents()
                  .then((components) => createChart(components));
    }
  }

  public _createForm() {
    this.form = FormVisualization.createForm();
  }
}
