import { Routes, RouterModule } from '@angular/router';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { CreateVisualization } from './components/create-visualization/create-visualization.component';
import { EditVisualization } from './components/edit-visualization/edit-visualization.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
    //  { path: 'ckeditor', component: Ckeditor },
      { path: 'create-visualization', component: CreateVisualization },
      { path: 'edit-visualization', component: EditVisualization }

    ]
  }
];

export const routing = RouterModule.forChild(routes);
