import { Subscription } from 'rxjs/Rx';

import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RealtimeChart } from './../../realtime-chart';
import { FormVisualization } from './form-visualization';
import { AppSubscriptionsService } from './../../appSubscriptions.service';


class Calculation {
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
    calculations: Calculation[];

    private type: string = 'streaming'; // batch or streaming

    // TODO use @angular-material if angular version of this project is updated
    public availableCoilIDs: number[] = [];
    public matchingCoilIDs: any[] = [];
    public coilID: string = '';

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

    protected searchCoilIDs() {
      this.matchingCoilIDs = ['current'];
      if (this.coilID !== '') {
        let match = this.availableCoilIDs.filter((availableCoilID) =>
                                        availableCoilID.toString().indexOf(this.coilID) > -1 &&
                                        availableCoilID.toString() != this.coilID);
        this.matchingCoilIDs = this.matchingCoilIDs.concat(match);
      } else {
        this.matchingCoilIDs = this.matchingCoilIDs.concat(this.availableCoilIDs);
      }
    }

    protected selectCoilID(coilID: any) {
      this.coilID = coilID;
      this.matchingCoilIDs = [];
    }

    public ngOnInit() {
      this.appSubscriptionsService.requestAllCoilIDs();

      this.appSubscriptionsService.allCoilIDs().subscribe(
        (coilID: any) => {
          this.availableCoilIDs = this.availableCoilIDs.concat(coilID);
        },
      );

      this._createForm();

      this.form.controls['type'].valueChanges.subscribe(type => {
        FormVisualization.changeDefaultProperties(type, this.form);
      });

      this.variables = Array.from(Array(56), (_, i) => 1 + i).map((v) => v.toString()); // "1" to "56"
      this.calculations = [
        new Calculation('raw', 'Raw'),
        new Calculation('mean', 'Mean'),
        new Calculation('variance', 'Variance'),
        new Calculation('sax_vsm', 'SAX/VSM'),
      ];
    }

    public ngOnDestroy() {
      FormVisualization.defaults = {};
    }
}
