import { Subscription } from 'rxjs/Rx';
import { OnInit, OnDestroy } from '@angular/core';
import { RealtimeChart } from './../../realtime-chart';
import { FormVisualization } from './form-visualization';
import { FormGroup } from '@angular/forms';

export class Calculation {
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

    private type: string = 'streaming'; //batch or streaming
    
    constructor() {

    }

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

    protected valueKeysChange(keys: string[]) {
        FormVisualization.valueKeysChange(keys);
    }

    protected calculationsCbChange(event: any) {
        FormVisualization.calculationsCbChange(event);
    }

    public ngOnInit() {
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
    }
}