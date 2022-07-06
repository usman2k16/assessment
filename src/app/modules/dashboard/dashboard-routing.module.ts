import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cAuthGuard } from 'src/app/guards/auth.guard';
import { cPostDetailsComponent } from './post-details/post-details.component';
import { cPostsComponent } from './posts/posts.component';
import { cUserDetailsComponent } from './user-details/user-details.component';
import { cUsersComponent } from './users/users.component';

 const routes: Routes = [
  {
    path:'posts', component: cPostsComponent, canActivate:[cAuthGuard],
  },
  {
    path:'users', component: cUsersComponent, canActivate:[cAuthGuard],
  },
  {
    path:'post/:postId/:userId', component: cPostDetailsComponent, canActivate:[cAuthGuard],
  },
  {
    path:'user/:id', component: cUserDetailsComponent, canActivate:[cAuthGuard],
  },
  {
    path:'', redirectTo: 'posts', pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'posts', pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
