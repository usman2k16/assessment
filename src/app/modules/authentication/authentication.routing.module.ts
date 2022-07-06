import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cForgetPasswordComponent } from './forgetpassword/forgetpassword.component';
import { cLoginComponent } from './login/login.component';
import { cNotfoundComponent } from './notfound/notfound.component';
import { cResetPasswordComponent } from './resetpassword/resetpassword.component';
import { cSignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'login', component: cLoginComponent
  },
  {
    path:'signup', component: cSignUpComponent
  },
  {
    path:'reset-password', component: cResetPasswordComponent
  },
  {
    path:'forget-password', component: cForgetPasswordComponent
  },
  {
    path:'not-found', component: cNotfoundComponent
  },
  {
    path:'', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'not-found', pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
