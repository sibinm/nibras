import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

import { HomeComponent } from '../home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

export const Routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    Routing
  ],
})
export class HomeModule { }