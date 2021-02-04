import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

import { HomeComponent } from '../home/home/home.component';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

export const Routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    HomeComponent,
    OverviewCardComponent,
    BlogComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    Routing
  ],
})
export class HomeModule { }