import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';

import { SectionTitleComponent } from '../shared/section-title/section-title.component';

@NgModule({
  declarations: [
    SectionTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SectionTitleComponent
  ]
})

export class SharedModule { }
