import { Proteic } from './proteic.component';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
  ],
  declarations: [
    Proteic
],
  exports: [
    Proteic
  ]
})
export class ProteicModule {}
