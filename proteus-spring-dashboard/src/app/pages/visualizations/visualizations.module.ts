import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DashboardService } from '../dashboard/dashboard.service'
import { routing }       from './visualizations.routing';
import { Visualizations } from './visualizations.component';
import { CreateVisualization } from './components/new';
import { EditVisualization } from './components/edit';
import { EditOneVisualization } from './components/edit/editOne.component';
import { Dataset } from './components/dataset';
import { KeysPipe } from './keys.pipe';
import { AnnotationsComponent } from './components/annotations/annotations.component';
import { AnnotationsService } from './components/annotations/annotations.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    FormsModule,
  ],
  declarations: [
    KeysPipe,
    Visualizations,
    CreateVisualization,
    EditVisualization,
    EditOneVisualization,
    Dataset,
    AnnotationsComponent,
  ],
  providers: [AnnotationsService],
})
export class VisualizationsModule {
}
