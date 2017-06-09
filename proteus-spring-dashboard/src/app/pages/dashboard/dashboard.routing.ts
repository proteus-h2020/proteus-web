import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      preload: true
    },
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
