import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RealtimeChart } from './../../realtime-chart';

import { getDefaultOptions } from 'proteic';

export class FormEditor {

    //public static defaults = getDefaultOptions('linechart');
    public static defaults = {};
    private static fb: FormBuilder = new FormBuilder();
    public  static keyValues: string[] = [];


    public static valueKeysChange(keys: string[]) {
        this.keyValues = keys;
    }

    public static createForm(model: RealtimeChart = null): FormGroup {
        let currentConf = model ? model.configuration : null;
        return FormEditor.fb.group({
            title: [model ? model.title : '', [<any>Validators.required, <any>Validators.minLength(5)]],
            type: [model ? model.type : '', [<any>Validators.required,  <any>Validators.minLength(3)]],
            configuration: FormEditor._createConfigurationByChartProperties(currentConf),
            websocketEndpoint: [model ? model.websocketEndpoint : null, [<any>Validators.required]]
        });
    }

    private static _createConfigurationByChartProperties(conf : any): FormGroup {
        let form = {};
        for (var property in FormEditor.defaults) {
            if (FormEditor.defaults.hasOwnProperty(property)) {
                form[property] = [conf ? conf[property] : FormEditor.defaults[property]]
            }
        }
        return FormEditor.fb.group(form);
    }
    public static changeDefaultProperties(chartType: string, form: FormGroup) {
        FormEditor.defaults = getDefaultOptions(chartType.toLowerCase());
        form.setControl('configuration', this._createConfigurationByChartProperties(null));
    }

    public static isDynamicKey(key: string) {
        return key == 'propertyX' ||
            key == 'propertyY' ||
            key == 'propertyKey' ||
            key == 'propertyZ';
    }
}