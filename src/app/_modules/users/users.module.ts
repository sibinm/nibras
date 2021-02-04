import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

import { UsersComponent } from '../users/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
];

export const Routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    Routing
  ],
})
export class UsersModule { }