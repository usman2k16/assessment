import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { cPostsComponent } from './posts/posts.component';
import { cPostDetailsComponent } from './post-details/post-details.component';
import { cUserDetailsComponent } from './user-details/user-details.component';
import { cUsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    cPostsComponent,
    cPostDetailsComponent,
    cUserDetailsComponent,
    cUsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
