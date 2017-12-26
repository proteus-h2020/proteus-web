import { ProteicModule } from './../dashboard/proteic/proteic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './historical.routing';
import { HistoricalComponent } from './historical.component';

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
    HistoricalComponent,
  ],
  providers: [
  ],
})
export class HistoricalModule {}
