import { Subscription } from 'rxjs/Rx';
import { OnInit, OnDestroy } from '@angular/core';
import { RealtimeChart } from './../../realtime-chart';
import { FormVisualization } from './form-visualization';
import { FormGroup } from '@angular/forms';
export abstract class VisualizationForm implements OnInit, OnDestroy {
    public form: FormGroup;
    public submitted: boolean;
    private cancellableSubscriptions: Subscription[];

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

    public ngOnInit() {
        this._createForm();

        this.form.controls['type'].valueChanges.subscribe(type => {
            FormVisualization.changeDefaultProperties(type, this.form);
        });
    }

    public ngOnDestroy() {
    }
}