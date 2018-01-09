export type AnnotationTypes = 'threshold' | 'band';

export class Annotation {
    id: number;
    text: string;
    type: AnnotationTypes;
    settings: any;
    axis: string;
    value: number;
    variable: string;
    width: string | number;
}
