import { ProteicModule } from './proteic/proteic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import { Proteic } from './proteic';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    ProteicModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
  ],
})
export class DashboardModule {}
