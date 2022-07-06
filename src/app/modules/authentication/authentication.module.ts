import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cLoginComponent } from './login/login.component';
import { cSignUpComponent } from './signup/signup.component';
import { cForgetPasswordComponent } from './forgetpassword/forgetpassword.component';
import { cResetPasswordComponent } from './resetpassword/resetpassword.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { cNotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    cLoginComponent,
    cSignUpComponent,
    cForgetPasswordComponent,
    cResetPasswordComponent,
    cNotfoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
