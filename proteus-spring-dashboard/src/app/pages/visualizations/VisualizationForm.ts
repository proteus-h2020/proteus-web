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
  * An index of form-array of coilIDs for interval
  * It's assigned in @see search() and used in @see select() to set value of coilIDs form-array
  * @public
  * @memberof VisualizationForm
  */
  public coilIDsIndex: number;

  /**
  * An index of form-array of hsmVariables for interval (no use now)
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

  private searchMethod(input: string, target: string) {
    switch (target) {
      case 'coil':
        if (input !== '') {
          this.matchingCoilIDs = FormVisualization.availableCoilIDs.filter((availableCoilID) =>
                                          availableCoilID.toString().indexOf(input) > -1 &&
                                          availableCoilID.toString() != input);
        } else {
          this.matchingCoilIDs = FormVisualization.availableCoilIDs;
        }
        break;
      case 'hsmVariables':
        if (input !== '') {
          this.matchingHSMvariables = FormVisualization.availableHSMvariables.filter((hsmVariable) =>
                                              hsmVariable.toLowerCase().indexOf(input) > -1 &&
                                              hsmVariable.toLowerCase() != input);
        } else {
          this.matchingHSMvariables = FormVisualization.availableHSMvariables;
        }
        break;
    }
  }

  protected search(index: number = null, target: string) {
    let input;
    switch (target) {
      case 'coilID':
        input = this.form.controls['coilID'].value;
        this.searchMethod(input, 'coil');
        break;
      case 'coilIDs':
        input = (index !== null) ? this.coilIDs.at(index).value : this.form.controls['newCoilIDs'].value;
        this.coilIDsIndex = index;
        this.searchMethod(input, 'coil');
        break;
      case 'hsmVariables':
        input = (index !== null) ? this.hsmVariables.at(index).value : this.form.controls['newHSMvariables'].value;
        this.hsmVariablesIndex = index;
        this.searchMethod(input, 'hsmVariables');
        break;
      default:
        break;
    }
  }

  protected select(value: string, target: string) {
    switch (target) {
      case 'coilID':
        FormVisualization.changeCoilID(+value, this.form);
        this.matchingCoilIDs = [];
        break;
      case 'coilIDs':
        if (this.coilIDsIndex === null) {
          this.form.controls['newCoilIDs'].setValue(value);
        } else { // interval
          this.coilIDs.at(this.coilIDsIndex).setValue(value);
        }
        this.matchingCoilIDs = [];
        break;
      case 'hsmVariables':
        if (this.hsmVariablesIndex === null) {
          this.form.controls['newHSMvariables'].setValue(value);
        } else {
          this.hsmVariables.at(this.hsmVariablesIndex).setValue(value);
        }
        this.matchingHSMvariables = [];
        break;
      default:
        break;
    }
  }

  private checkAddValidation(target: string, value: any): boolean {
    let valid: boolean = false;
    let regex;
    switch (target) {
      case 'coilIDs':
        regex = new RegExp ('^[0-9]+$');
        if (regex.test(value.toString()) && !(this.coilIDs.value.find((v) => v == value))) {
          valid = true;
        }
        break;
      case 'hsmVariables':
        regex = new RegExp ('^V[0-9]+$');
        if (regex.test(value) && !(this.hsmVariables.value.find((v) => v == value))) {
          valid = true;
        }
        break;
    }

    return valid;
  }

  protected addForm(target: string) {
    switch (target) {
      case 'coilIDs':
        if (this.checkAddValidation(target, this.form.controls['newCoilIDs'].value) === true) {
          this.coilIDs.push(new FormControl(this.form.controls['newCoilIDs'].value));
          this.form.controls['newCoilIDs'].setValue('');
        }
        break;
      case 'hsmVariables':
        if (this.checkAddValidation(target, this.form.controls['newHSMvariables'].value) === true) {
          this.hsmVariables.push(new FormControl(this.form.controls['newHSMvariables'].value));
          this.form.controls['newHSMvariables'].setValue('');
        }
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
      FormVisualization.changeCoilIDsFormAndValidation(option, this.form);
    });

    this.variables = Array.from(Array(56), (_, i) => 1 + i).map((v) => v.toString()); // "1" to "56"

  }

  public ngOnDestroy() {
    FormVisualization.defaults = {};
    FormVisualization.mode = [];
    FormVisualization.calculations = [];
  }
}
