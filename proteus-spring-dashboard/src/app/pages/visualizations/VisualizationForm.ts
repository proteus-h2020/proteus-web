import { Subscription } from 'rxjs/Rx';

import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

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

    // TODO use @angular-material if angular version of this project is updated
    public availableCoilIDs: number[] = [];
    public matchingCoilIDs: number[] = [];
    public index: number;

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
      return FormVisualization.mode;
    }

    protected calculations() {
      return FormVisualization.calculations;
    }

    protected searchCoilIDs(index: number = null) {
      let inputCoilID = index !== null ? this.coilIDs.at(index).value : this.form.controls['coilID'].value;
      this.index = index;

      if (inputCoilID !== '') {
        this.matchingCoilIDs = this.availableCoilIDs.filter((availableCoilID) =>
                                        availableCoilID.toString().indexOf(inputCoilID) > -1 &&
                                        availableCoilID.toString() != inputCoilID);
      } else {
        this.matchingCoilIDs = this.matchingCoilIDs.concat(this.availableCoilIDs);
      }
    }

    protected selectCoilID(coilID: number) {
      if (this.index === null) {
        FormVisualization.changeCoilID(coilID, this.form);
      } else {
        this.coilIDs.at(this.index).setValue(coilID);
      }

      this.matchingCoilIDs = [];
    }

    protected dataPropertyTitle(mode: string) {
      let title: string;
      switch (mode) {
        case 'streaming':
          title = 'Real-time data';
          break;
        case 'historical':
          title = 'Historical data';
          break;
        case 'hsm':
          title = 'Hsm data';
          break;
        default:
          title = 'Data property';
          break;
      }
      return title;
    }

    get coilIDs(): FormArray {
      return this.form.get('coilIDs') as FormArray;
    }

    protected addForm() {
      this.coilIDs.push(new FormControl(''));
    }

    protected deleteForm(index: number) {
      this.coilIDs.removeAt(index);
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

      this.form.controls['mode'].valueChanges.subscribe((mode) => {
        FormVisualization.changeDataProperties(mode, this.form);
        FormVisualization.changeValidation(mode, this.form);
      });

      this.variables = Array.from(Array(56), (_, i) => 1 + i).map((v) => v.toString()); // "1" to "56"

    }

    public ngOnDestroy() {
      FormVisualization.defaults = {};
      FormVisualization.mode = [];
      FormVisualization.calculations = [];
    }
}
