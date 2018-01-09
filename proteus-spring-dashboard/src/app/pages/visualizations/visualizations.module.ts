import { SelectVisualizationComponent } from './components/select/select.component';
import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DashboardService } from '../dashboard/dashboard.service'
import { routing }       from './visualizations.routing';
import { Visualizations } from './visualizations.component';
import { CreateVisualizationComponent } from './components/new';
import { EditVisualizationComponent } from './components/edit';
import { EditOneVisualizationComponent } from './components/edit/editOne.component';
import { KeysPipe } from './keys.pipe';
import { AnnotationsComponent } from './components/annotations/annotations.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ComponentsService } from './components/components.service';

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
    SelectVisualizationComponent,
    CreateVisualizationComponent,
    EditVisualizationComponent,
    EditOneVisualizationComponent,
    AnnotationsComponent,
    StatisticsComponent,
  ],
  providers: [
      ComponentsService,
  ],
})
export class VisualizationsModule {
}
