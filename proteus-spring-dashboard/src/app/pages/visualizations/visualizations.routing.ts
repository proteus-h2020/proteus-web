import { SelectVisualizationComponent } from './components/select/select.component';
import { Routes, RouterModule } from '@angular/router';

import { Visualizations } from './visualizations.component';
import { CreateVisualizationComponent } from './components/new/new.component';
import { EditVisualizationComponent } from './components/edit/edit.component';
import { EditOneVisualizationComponent } from './components/edit/editOne.component';

const routes: Routes = [
  {
    path: '',
    component: Visualizations,
    children: [
      { path: 'select', component: SelectVisualizationComponent },
      { path: 'new', component: CreateVisualizationComponent },
      { path: 'edit', component: EditVisualizationComponent },
      { path: 'edit/:id', component: EditOneVisualizationComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
