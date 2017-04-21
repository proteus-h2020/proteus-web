import { Subscription } from 'rxjs/Rx';
import { OnInit, OnDestroy } from '@angular/core';
import { RealtimeChart } from './../../realtime-chart';
import { FormEditor } from './form-editor';
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
        return FormEditor.keyValues;
    }


    protected isDynamicKey(key: string) {
        return FormEditor.isDynamicKey(key);

    }

    protected defaults() {
        return FormEditor.defaults;
    }

    protected valueKeysChange(keys: string[]) {
        FormEditor.valueKeysChange(keys);
    }

    public ngOnInit() {
        this._createForm();

        this.form.controls['type'].valueChanges.subscribe(type => {
            FormEditor.changeDefaultProperties(type, this.form);
        });
    }

    public ngOnDestroy() {
    }
}