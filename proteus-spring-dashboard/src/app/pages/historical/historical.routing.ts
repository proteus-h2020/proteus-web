import { Routes, RouterModule }  from '@angular/router';

import { HistoricalComponent } from './historical.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: HistoricalComponent,
    data: {
      preload: true
    },
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
