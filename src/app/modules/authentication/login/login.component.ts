import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { cAuthService } from 'src/app/services/auth.service';
import { cSessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class cLoginComponent implements OnInit {

  fLoginForm: FormGroup;
  constructor(private oAuthService: cAuthService, private oSessionService: cSessionService, private oRouter: Router,private oFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    const isLoggedIn: boolean = this.oSessionService.cSessionService_GetUserSession();
    console.log("cLoginComponent : isLoggedIn ==> ",isLoggedIn);
    if (isLoggedIn && isLoggedIn == true)
    {
      this.oRouter.navigate(['app/posts']);
    }
    else
    {
      this.oSessionService.cSessionService_SetUserSession(false)
    }
    this.fLoginForm = this.oFormBuilder.group({
      email: [''],
      password: ['']
  });
  }
  //login user
  cLoginComponent_LogInUser()
  {
    this.oAuthService.cAuthService_saveSession();
    this.oAuthService.cAuthService_setPermission();
    this.oRouter.navigate(['app/posts']);
  }
}
