import { Subscription } from 'rxjs/Rx';

import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

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
  public variables: string[];

  // TODO use @angular-material if angular version of this project is updated
  public matchingCoilIDs: number[] = [];
  public matchingHSMvariables: string[] = [];

  /**
  * An index of form-array of coilIDs
  * It's assigned in @see search() and used in @see select() to set value of coilIDs form-array
  * @public
  * @memberof VisualizationForm
  */
  public coilIDsIndex: number;

  /**
  * An index of form-array of hsmVariables
  * It's assigned in @see search() and used in @see select() to set value of hsmVariables form-array
  * @public
  * @memberof VisualizationForm
  */
  public hsmVariablesIndex: number;

  constructor(
    protected appSubscriptionsService: AppSubscriptionsService,
  ) { }

  abstract _createForm();

  abstract save(model: RealtimeChart, isValid: boolean);

  protected defaults() {
    return FormVisualization.defaults;
  }

  protected typeOfDefault(key: string) {
    return typeof FormVisualization.defaults[key];
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

  protected dataPropertyTitle(mode: string) {
    let title: string;
    switch (mode) {
      case 'streaming':
        title = 'realtime';
        break;
      case 'historical':
        title = 'historical';
        break;
      case 'hsm':
        title = 'hsm';
        break;
      default:
        title = 'property';
        break;
    }
    return title;
  }

  get coilIDs(): FormArray {
    return this.form.get('coilIDs') as FormArray;
  }

  get hsmVariables(): FormArray {
    return this.form.get('hsmVariables') as FormArray;
  }

  protected getCoilID(index: number) {
    return this.coilIDs.at(index).value;
  }

  protected getHSMvariable(index: number) {
    return this.hsmVariables.at(index).value;
  }

  protected search(index: number = null, target: string) {
    switch (target) {
      case 'coilIDs':
        let inputCoilID = index !== null ? this.coilIDs.at(index).value : this.form.controls['coilID'].value;
        this.coilIDsIndex = index;

        if (inputCoilID !== '') {
          this.matchingCoilIDs = FormVisualization.availableCoilIDs.filter((availableCoilID) =>
                                          availableCoilID.toString().indexOf(inputCoilID) > -1 &&
                                          availableCoilID.toString() != inputCoilID);
        } else {
          this.matchingCoilIDs = FormVisualization.availableCoilIDs;
        }
        break;
      case 'hsmVariables':
        let inputHSMvars = this.hsmVariables.at(index).value;
        this.hsmVariablesIndex = index;

        if (inputHSMvars !== '') {
          this.matchingHSMvariables = FormVisualization.availableHSMvariables.filter((hsmVariable) =>
                                              hsmVariable.toLowerCase().indexOf(inputHSMvars) > -1 &&
                                              hsmVariable.toLowerCase() != inputHSMvars);
        } else {
          this.matchingHSMvariables = FormVisualization.availableHSMvariables;
        }
        break;
      default:
        break;
    }
  }

  protected select(value: number | string, target: string) {
    switch (target) {
      case 'coilIDs':
        if (this.coilIDsIndex === null) { // single coil ID
          FormVisualization.changeCoilID(+value, this.form);
        } else {
          this.coilIDs.at(this.coilIDsIndex).setValue(value);
        }
        this.matchingCoilIDs = [];
        break;
      case 'hsmVariables':
        if (this.hsmVariablesIndex !== null) {
          this.hsmVariables.at(this.hsmVariablesIndex).setValue(value);
        }
        this.matchingHSMvariables = [];
        break;
      default:
        break;
    }

  }

  protected addForm(target: string) {
    switch (target) {
      case 'coilIDs':
        this.coilIDs.push(new FormControl('', <any>Validators.required));
        break;
      case 'hsmVariables':
        this.hsmVariables.push(new FormControl('', <any>Validators.required));
        break;
    }
  }

  protected deleteForm(index: number, target: string) {
    switch (target) {
      case 'coilIDs':
        this.coilIDs.removeAt(index);
        break;
      case 'hsmVariables':
        this.hsmVariables.removeAt(index);
        break;
    }
  }

  public ngOnInit() {
    if (FormVisualization.availableCoilIDs.length == 0) { // To avoid requesting available value frequently
      this.appSubscriptionsService.requestAllCoilIDs();

      this.appSubscriptionsService.allCoilIDs().subscribe((coilID: number[]) => {
          FormVisualization.availableCoilIDs = FormVisualization.availableCoilIDs.concat(coilID);
        });
    }

    if (FormVisualization.availableHSMvariables.length == 0) { // To avoid requesting available value frequently
      this.appSubscriptionsService.requestAllHSMvariables();

      this.appSubscriptionsService.allHSMvariables().subscribe((hsmVariables: string[]) => {
        FormVisualization.availableHSMvariables = FormVisualization.availableHSMvariables.concat(hsmVariables);
      });
    }

    this._createForm();

    this.form.controls['type'].valueChanges.subscribe((type) => {
      FormVisualization.changeDefaultProperties(type, this.form);
    });

    this.form.controls['mode'].valueChanges.subscribe((mode) => {
      FormVisualization.changeDataProperties(mode, this.form);
      FormVisualization.changeValidation(mode, this.form);
    });

    this.form.controls['coilSelectOption'].valueChanges.subscribe((option) => {
      FormVisualization.changeCoilIDsform(option, this.form);
    });

    this.variables = Array.from(Array(56), (_, i) => 1 + i).map((v) => v.toString()); // "1" to "56"

  }

  public ngOnDestroy() {
    FormVisualization.defaults = {};
    FormVisualization.mode = [];
    FormVisualization.calculations = [];
  }
}
