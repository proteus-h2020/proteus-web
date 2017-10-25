import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RealtimeChart } from './../../realtime-chart';
import { getDefaultOptions } from 'proteic';
import { Calculation } from 'app/pages/visualizations/VisualizationForm';

export class FormVisualization {
    public static defaults = {};
    private static fb: FormBuilder = new FormBuilder();
    public static keyValues: string[] = [];
    public static selectedCalculations: Calculation[] = new Array<Calculation>();


    public static valueKeysChange(keys: string[]) {
        this.keyValues = keys;
    }

    public static calculationsCbChange(event: any) {

        if (event.target.checked) {
            this.selectedCalculations.push(event.target.value);
        }
        else {
            let index = this.selectedCalculations.indexOf(event.target.value);
            if (index > -1) {
                this.selectedCalculations.splice(index, 1);
            }
        }
    }

    public static createForm(model: RealtimeChart = null): FormGroup {
        this.keyValues = ['positionX', 'positionY', 'key', 'value'];
        const currentConf = model ? model.configuration : null;

        return FormVisualization.fb.group({
            title: [model ? model.title : 'untitled'],
            type: [model ? model.type : '', [<any>Validators.required]],
            configuration: FormVisualization._createConfigurationByChartProperties(currentConf),
            variable: [model ? model.variable : null],
            calculations: [model ? model.calculations : null, [<any>Validators.required]],
            alarms: [model ? model.alarms : null],
           // alarmFactor: [model ? model.alarmFactor : 1]
        });
    }

    private static _createConfigurationByChartProperties(conf: any): FormGroup {
        let form = {};
        for (let property in FormVisualization.defaults) {
            if (FormVisualization.defaults.hasOwnProperty(property)) {
                if (property == 'pauseButton') { // In proteic, default of pauseButton is false
                    form[property] = [conf ? conf[property] : true];
                } else {
                    form[property] = [conf ? conf[property] : FormVisualization.defaults[property]];
                }
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
