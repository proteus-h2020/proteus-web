import { Subscription } from 'rxjs/Rx';

import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RealtimeChart } from './../../realtime-chart';
import { FormVisualization } from './form-visualization';
import { AppSubscriptionsService } from './../../appSubscriptions.service';


export class PairForm {
    value;
    label;
    constructor(value: string, label: string) {
        this.value = value;
        this.label = label;
    }
}


export abstract class VisualizationForm implements OnInit, OnDestroy {
    public form: FormGroup;
    public submitted: boolean;
    private cancellableSubscriptions: Subscription[];
    variables: string[];
    calculations: PairForm[];

    // TODO use @angular-material if angular version of this project is updated
    public availableCoilIDs: number[] = [];
    public matchingCoilIDs: number[] = [];

    constructor(
      protected appSubscriptionsService: AppSubscriptionsService,
    ) { }

    abstract _createForm();

    abstract save(model: RealtimeChart, isValid: boolean);


    protected keyValues() {
        return FormVisualization.keyValues;
    }


    protected isDynamicKey(key: string) {
        return FormVisualization.isDynamicKey(key);

    }

    protected defaults() {
        return FormVisualization.defaults;
    }

    protected typeOfDefault(key: string) {
        return typeof FormVisualization.defaults[key];
    }

    protected valueKeysChange(keys: string[]) {
        FormVisualization.valueKeysChange(keys);
    }

    protected chartsWithAnnotations() {
      return ['Linechart', 'Scatterplot', 'Barchart', 'Heatmap', 'StackedArea', 'Swimlane', 'Streamgraph'];
    }

    protected chartsWithStatistics() {
      return ['Linechart'];
    }

    protected visualizationModes() {
      let initMode = [new PairForm('streaming', 'REAL-TIME DATA')]; // when visualization type is not selected
      return FormVisualization.mode ? FormVisualization.mode : initMode;
    }

    protected searchCoilIDs() {
      let inputCoilID = this.form.controls['coilID'].value;

      if (inputCoilID !== '') {
        let match = this.availableCoilIDs.filter((availableCoilID) =>
                                        availableCoilID.toString().indexOf(inputCoilID) > -1 &&
                                        availableCoilID.toString() != inputCoilID);
        this.matchingCoilIDs = this.matchingCoilIDs.concat(match);
      } else {
        this.matchingCoilIDs = this.matchingCoilIDs.concat(this.availableCoilIDs);
      }
    }

    protected selectCoilID(coilID: number) {
      if (coilID) {
        FormVisualization.changeCoilID(coilID, this.form);
      }

      this.matchingCoilIDs = [];
    }

    public ngOnInit() {
      this.appSubscriptionsService.requestAllCoilIDs();

      this.appSubscriptionsService.allCoilIDs().subscribe(
        (coilID: number) => {
          this.availableCoilIDs = this.availableCoilIDs.concat(coilID);
        },
      );

      this._createForm();

      this.form.controls['type'].valueChanges.subscribe((type) => {
        FormVisualization.changeDefaultProperties(type, this.form);
        FormVisualization.changeVisualizationMode(type, this.form);
      });

      this.variables = Array.from(Array(56), (_, i) => 1 + i).map((v) => v.toString()); // "1" to "56"
      this.calculations = [
        new PairForm('raw', 'Raw'),
        new PairForm('mean', 'Mean'),
        new PairForm('variance', 'Variance'),
        new PairForm('sax_vsm', 'SAX/VSM'),
      ];
    }

    public ngOnDestroy() {
      FormVisualization.defaults = {};
    }
}
