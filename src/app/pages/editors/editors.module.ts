import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {DashboardService} from '../dashboard/dashboard.service'
import { routing }       from './editors.routing';
import { Editors } from './editors.component';
import { CreateVisualization } from './components/create-visualization/create-visualization.component';
import { EditVisualization } from './components/edit-visualization/edit-visualization.component';
import { Dataset } from './components/create-visualization/components/dataset/dataset.component';
import {KeysPipe} from './keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    KeysPipe,
    Editors,
    CreateVisualization,
    EditVisualization,
    Dataset
  ],
  providers: []
})
export class EditorsModule {
}
