import { Routes, RouterModule } from '@angular/router';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { CreateVisualization } from './components/new/new.component';
import { EditVisualization } from './components/edit/edit.component';
import { EditOneVisualization } from './components/edit/editOne.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
    //  { path: 'ckeditor', component: Ckeditor },
      { path: 'new', component: CreateVisualization },
      { path: 'edit', component: EditVisualization },
      { path: 'edit/:id', component: EditOneVisualization }

    ]
  }
];

export const routing = RouterModule.forChild(routes);
