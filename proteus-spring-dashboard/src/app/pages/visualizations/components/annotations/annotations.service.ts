import { Injectable } from '@angular/core';
import { Annotation } from './annotation';

@Injectable()
export class AnnotationsService {

    private annotations: Annotation[];

    constructor() {
        this.annotations = [];
    }

    getAnnotations(): Promise<Annotation[]> { 
        return Promise.resolve(this.annotations);
    }

    getAnnotation(id: number): Promise<Annotation> {
        return Promise.resolve(this.annotations.find(a => a.id === id));   
    }

    delete(id: number): void {
        const index = this.annotations
            .indexOf(this.annotations.find(a => a.id === id));

        Promise.resolve(this.annotations.splice(index, 1));
    }

    create(annotation: Annotation): void {
        this.annotations.push(annotation);
    }

}
