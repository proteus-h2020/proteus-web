import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RealtimeChart } from './../../realtime-chart';
import { getDefaultOptions } from 'proteic';

export class FormVisualization {
  public static defaults = {};
  private static fb: FormBuilder = new FormBuilder();
  public static keyValues: string[] = [];


  public static valueKeysChange(keys: string[]) {
    this.keyValues = keys;
  }

  public static createForm(model: RealtimeChart = null): FormGroup {
    this.keyValues = ['positionX', 'positionY', 'key', 'value'];

    return FormVisualization.fb.group({
      title: [model ? model.title : 'untitled'],
      type: [model ? model.type : '', [<any>Validators.required]],
      configuration: FormVisualization._createConfigurationByChartProperties(model),
      variable: [model ? model.variable : null],
      calculations: [model ? model.calculations : null, [<any>Validators.required]],
      alarms: [model ? model.alarms : null],
      coilID: [model ? model.coilID : '', [<any>Validators.required]],
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
   * @private {static}
   * @memberof FormVisualization
   */
  private static _createConfigurationByChartProperties(model: RealtimeChart): FormGroup {
    let form = {},
      conf = null,
      defaults,
      // default values for new-visualization (different from its value in proteic)
      proteusWebDefaults = { 'propertyY': 'value' };

    if (FormVisualization.defaults.hasOwnProperty('propertyZ')) {
      proteusWebDefaults['propertyZ'] = proteusWebDefaults.propertyY;
      delete proteusWebDefaults.propertyY;
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

  public static changeDefaultProperties(chartType: string, form: FormGroup) {
    FormVisualization.defaults = getDefaultOptions(chartType.toLowerCase());
    form.setControl('configuration', this._createConfigurationByChartProperties(null));
  }

  public static changeCoilID(coilID: string, form: FormGroup) {
    form.controls['coilID'].setValue(coilID);
  }

  public static isDynamicKey(key: string) {
    return key == 'propertyKey' ||
      key == 'propertyX' ||
      key == 'propertyY' ||
      key == 'propertyZ';
  }
}
