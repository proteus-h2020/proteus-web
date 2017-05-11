import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {DashboardService} from '../dashboard/dashboard.service'
import { routing }       from './editors.routing';
import { Editors } from './editors.component';
import { CreateVisualization } from './components/new';
import { EditVisualization } from './components/edit';
import { EditOneVisualization } from './components/edit/editOne.component';
import { Dataset } from './components/dataset';
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
    EditOneVisualization,
    Dataset
  ],
  providers: []
})
export class EditorsModule {
}
