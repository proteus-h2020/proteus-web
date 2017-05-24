import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RealtimeChart } from './../../realtime-chart';

import { getDefaultOptions } from 'proteic';

export class FormVisualization {

    //public static defaults = getDefaultOptions('linechart');
    public static defaults = {};
    private static fb: FormBuilder = new FormBuilder();
    public  static keyValues: string[] = [];


    public static valueKeysChange(keys: string[]) {
        this.keyValues = keys;
    }

    public static createForm(model: RealtimeChart = null): FormGroup {
        this.keyValues = ['positionX', 'positionY', 'key', 'value'];
        let currentConf = model ? model.configuration : null;
        return FormVisualization.fb.group({
            title: [model ? model.title : 'untitled'],
            type: [model ? model.type : '', [<any>Validators.required]],
            configuration: FormVisualization._createConfigurationByChartProperties(currentConf),
            // websocketEndpoint: [model ? model.websocketEndpoint : null, [<any>Validators.required]]
        });
    }

    private static _createConfigurationByChartProperties(conf : any): FormGroup {
        let form = {};
        for (var property in FormVisualization.defaults) {
            if (FormVisualization.defaults.hasOwnProperty(property)) {
                form[property] = [conf ? conf[property] : FormVisualization.defaults[property]]
            }
        }
        return FormVisualization.fb.group(form);
    }
    public static changeDefaultProperties(chartType: string, form: FormGroup) {
        FormVisualization.defaults = getDefaultOptions(chartType.toLowerCase());
        form.setControl('configuration', this._createConfigurationByChartProperties(null));
    }

    public static isDynamicKey(key: string) {
        return key == 'propertyKey' ||
            key == 'propertyX' ||
            key == 'propertyY' ||
            key == 'propertyZ';
    }
}