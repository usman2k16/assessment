import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cAuthGuard } from './guards/auth.guard';
import { cBlankComponent } from './layouts/blank/blank.component';
import { cFullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: cBlankComponent,
    children:
    [
      {
        path:'auth',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path:'',
        redirectTo: "auth",
        pathMatch: "full"
      },
    ]
  },
  {
    path: 'app',
    component: cFullComponent,
    canActivate:[cAuthGuard],
    children:
    [
      {
        path:'',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "auth/not-found",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
