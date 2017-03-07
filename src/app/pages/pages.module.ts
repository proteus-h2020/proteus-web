import { CustomReuseStrategy } from './customReuseStrategyRoute';
import { RouteReuseStrategy } from '@angular/router';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages],
  providers: [
   // {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ]
})
export class PagesModule {
}
