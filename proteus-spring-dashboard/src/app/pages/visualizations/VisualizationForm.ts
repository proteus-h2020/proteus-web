import { Subscription } from 'rxjs/Rx';
import { OnInit, OnDestroy } from '@angular/core';
import { RealtimeChart } from './../../realtime-chart';
import { FormVisualization } from './form-visualization';
import { FormGroup } from '@angular/forms';
export abstract class VisualizationForm implements OnInit, OnDestroy {
    public form: FormGroup;
    public submitted: boolean;
    private cancellableSubscriptions: Subscription[];
    variables: string[];
    calculations: string[];

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

        this.variables = ['C0001', 'C0002', 'C0003', 'C0004', 'C0005', 'C0006', 'C0007', 'C0008', 'C0009', 'C0010', 'C0011', 'C0012', 'C0013', 'C0014', 'C0015', 'C0016', 'C0017', 'C0018', 'C0019', 'C0020', 'C0021', 'C0022', 'C0023', 'C0024', 'C0025', 'C0026', 'C0027', 'C0028', 'C0029', 'C0030', 'C0031', 'C0032', 'C0033', 'C0034', 'C0035', 'C0036', 'C0037', 'C0038', 'C0039', 'C0040', 'C0041', 'C0042', 'C0043', 'C0044', 'C0045', 'C0046', 'C0047', 'C0048', 'C0049', 'C0050', 'C0051', 'C0052', 'C0053', 'C0054', 'C0055', 'C0056'];
        this.calculations = ['mean', 'variance'];
    }

    public ngOnDestroy() {
    }
}