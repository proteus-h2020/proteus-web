import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { RealtimeChart } from './../../realtime-chart';
import { getDefaultOptions } from 'proteic';
import { PairForm } from './VisualizationForm';

export class FormVisualization {
  private static fb: FormBuilder = new FormBuilder();

  public static defaults = {};
  public static mode: PairForm[];
  public static calculations: PairForm[];

  public static availableCoilIDs: number[] = [];
  public static availableHSMvariables: string[] = [];


  public static createForm(model: RealtimeChart = null): FormGroup {
    return FormVisualization.fb.group({
      title: [model ? model.title : 'untitled'],
      type: [model ? { value: model.type, disabled: true } : '', [<any>Validators.required]],
      configuration: FormVisualization._createConfigurationByChartProperties(model),
      variable: [model ? model.variable : null],
      calculations: FormVisualization.createCalculationForm(model),
      alarms: [model ? model.alarms : null],
      coilID: [model ? model.coilID : ''],
      mode: FormVisualization.createVisualizationMode(model),
      coilSelectOption: [model ? model.coilSelectOption : null],
      coilIDs: FormVisualization.createCoilIDsForm(model),
      hsmVariables: FormVisualization.createHSMvariableSelectForm(model),
     // alarmFactor: [model ? model.alarmFactor : 1]
    });
  }

  /**
   * @method
   * It creates configuration menu on Visualization board by chart property
   * (New-visualization): Basically, default config values get from proteic defaults configuration
   * (Edit-visualization): Create configuration form with user-input config values. If no user-input values,
   * config values get from only proteic defaults
   * @param {model} If model exists, it creates configuration on edit-visualization, else new-visualization
   * @param {chartType} If chartType exists, default configuration is set for chart type
   * @private {static}
   * @memberof FormVisualization
   */
  private static _createConfigurationByChartProperties(model: RealtimeChart, chartType: string = null): FormGroup {
    let form = {};
    let conf = null;
    let defaults;
    // Specific default configuration for new-visualization on proteus-web (different from its value in proteic)
    let proteusWebDefaults = { 'propertyY': 'value' };

    if (FormVisualization.defaults.hasOwnProperty('propertyZ')) {
      proteusWebDefaults['propertyZ'] = proteusWebDefaults.propertyY;
      delete proteusWebDefaults.propertyY;
    }

    switch (chartType) {
      case 'ParallelCoordinates':
        proteusWebDefaults['legend'] = true;
        proteusWebDefaults['propertyKey'] = 'coilId';
        delete proteusWebDefaults.propertyY;
        break;
      default:
        break;
    }

    if (model) {
      FormVisualization.defaults = getDefaultOptions(model.type.toLowerCase());
      conf = model.configuration;
    }

    for (let property in FormVisualization.defaults) {
      if (FormVisualization.defaults.hasOwnProperty(property)) {
        if (property in proteusWebDefaults) {
          defaults = proteusWebDefaults[property];
        } else {
          defaults = FormVisualization.defaults[property];
        }

        // Edit-visualization: If proteic chart defaults add, generated chart configuration should be updated
        if (conf) {
          form[property] = [conf[property] ? conf[property] : FormVisualization.defaults[property]];
        } else { // New-visualization
          form[property] = [defaults];
        }
      }
    }

    return FormVisualization.fb.group(form);
  }

  public static createCalculationForm(model: RealtimeChart = null, mode: string = null) {
    const visualizationMode: string = model ? model.mode : mode;
    switch (visualizationMode) {
      case 'streaming':
        FormVisualization.calculations = [
          new PairForm('raw', 'Raw'),
          new PairForm('mean', 'Mean'),
          new PairForm('variance', 'Variance'),
          new PairForm('sax_vsm', 'SAX/VSM'),
        ];
        break;
      case 'historical':
        FormVisualization.calculations = [
          new PairForm('raw', 'Raw'),
          new PairForm('mean', 'Mean'),
          new PairForm('variance', 'Variance'),
        ];
        break;
      case 'hsm':
        FormVisualization.calculations = [
          new PairForm('raw', 'Raw'),
        ];
        break;
      default:
        break;
    }

    return [model ? model.calculations : null, [<any>Validators.required]];
  }

  public static createVisualizationMode(model: RealtimeChart = null, type: string = null) {
    const chartType: string = model ? model.type : type;
    let defaultMode: string = '';
    let form;
    if (chartType !== null) {
      switch (chartType) {
        case 'ParallelCoordinates':
          FormVisualization.mode = [new PairForm('hsm', 'HSM DATA')];
          break;
        default:
          FormVisualization.mode = [
            new PairForm('streaming', 'REAL-TIME DATA'),
            new PairForm('historical', 'HISTORICAL DATA'),
          ];
          break;
      }

      defaultMode = FormVisualization.mode[0].value;
    }

    if (type) { // To set default value
      form = defaultMode;
    } else { // To build form
      form = [model ? model.mode : defaultMode, [<any>Validators.required]];
    }

    return form;
  }

  public static createCoilIDsForm(model: RealtimeChart = null, option: string = null): FormArray {
    let form: FormArray;
    const formOption = model ? model.coilSelectOption : option;
    switch (formOption) {
      case 'add':
        form = FormVisualization.createMutipleCoilIDSelectForm(model);
        break;
      case 'interval':
        form = FormVisualization.createCoilIDIntervalForm(model);
        break;
      default:
        break;
    }

    return form;
  }

  public static createCoilIDIntervalForm(model: RealtimeChart = null): FormArray {
    let formArray = [];
    if (model && model.mode == 'hsm') {
      const min = model.coilIDs[0];
      const max = model.coilIDs[model.coilIDs.length - 1];
      formArray.push(new FormControl(min, <any>Validators.required));
      formArray.push(new FormControl(max, <any>Validators.required));

    } else {
      formArray = [new FormControl('', <any>Validators.required), new FormControl('', <any>Validators.required)];
    }

    return FormVisualization.fb.array(formArray);
  }

  public static createMutipleCoilIDSelectForm(model: RealtimeChart = null): FormArray {
    let formArray = [];
    if (model && model.mode == 'hsm') {
      for (const coilID of model.coilIDs) {
        formArray.push(new FormControl(coilID, <any>Validators.required));
      }
    } else {
      formArray = [new FormControl('', <any>Validators.required)];
    }

    return FormVisualization.fb.array(formArray);
  }

  public static createHSMvariableSelectForm(model: RealtimeChart = null) {
    let formArray = [];
    if (model && model.mode == 'hsm') {
      for (const hsmVariable of model.hsmVariables) {
        formArray.push(new FormControl(hsmVariable, <any>Validators.required));
      }
    } else {
      formArray = [new FormControl('')];
    }

    return FormVisualization.fb.array(formArray);
  }

  public static changeDefaultProperties(chartType: string, form: FormGroup) {
    FormVisualization.defaults = getDefaultOptions(chartType.toLowerCase());
    form.setControl('configuration', this._createConfigurationByChartProperties(null, chartType));

    form.controls['mode'].setValue(FormVisualization.createVisualizationMode(null, chartType));
  }

  public static changeDataProperties(mode: string, form: FormGroup) {
    FormVisualization.createCalculationForm(null, mode);
  }

  public static changeValidation(mode: string, form: FormGroup) {
    switch (mode) {
      case 'streaming':
        form.controls['variable'].setValidators([<any>Validators.required]);
        break;
      case 'historical':
        form.controls['coilID'].setValidators([<any>Validators.required]);
        form.controls['variable'].setValidators([<any>Validators.required]);
        break;
      case 'hsm':
        const hsmVariables = form.get('hsmVariables') as FormArray;
        hsmVariables.at(0).setValidators([<any>Validators.required]);
        form.controls['coilSelectOption'].setValidators([<any>Validators.required]);
        break;
    }
  }

  public static changeCoilID(coilID: number, form: FormGroup) {
    form.controls['coilID'].setValue(coilID);
  }

  public static changeCoilIDsform(option: string, form: FormGroup) {
    form.setControl('coilIDs', FormVisualization.createCoilIDsForm(null, option));
  }

}
