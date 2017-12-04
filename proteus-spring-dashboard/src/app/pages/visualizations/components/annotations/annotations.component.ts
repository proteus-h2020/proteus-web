import { Component, OnInit } from '@angular/core';
import { Annotation, AnnotationTypes } from './annotation';
import { ComponentsService } from '../components.service';
import { ComponentSet } from '../componentSet';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.scss']
})
export class AnnotationsComponent implements OnInit {

  selectedAnnotation: Annotation;
  newAnnotation: Annotation;
  annotations: Annotation[];
  annotationId: number = 1;

  private id: number = null;

  constructor(
    private componentsService: ComponentsService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => { this.id = parseInt(params['id']); });
  }

  ngOnInit(): void {
    this.id = this.id ? this.id : null; // If id exists, page is edit-visualization
    if (!this.id) {
      this.componentsService.initialize();
    }

    this.showAnnotations(this.id);
  }

  showAnnotations(id: number = null): void {
    this.componentsService.getComponents(id)
          .then((components) => this.annotations = components.annotations);
  }

  add(annotation: Annotation): void {
    this.annotationId = this.componentsService.getComponentLastId(annotation);
    annotation.id = this.annotationId++;
    this.componentsService.create(annotation);
    this.newAnnotation = null;
  }

  cancel(): void {
    if (this.newAnnotation) {
        this.newAnnotation = null;
    }
    if (this.selectedAnnotation) {
        this.selectedAnnotation = null;
    }
  }

  delete(annotation: Annotation): void {
    this.componentsService.delete(annotation);
  }

  edit(annotation: Annotation): void {
    this.selectedAnnotation = annotation;
  }

  create(annotation: Annotation): void {
    this.selectedAnnotation = null;
  }

  showCreateForm() {
    this.newAnnotation = new Annotation();
  }

}
