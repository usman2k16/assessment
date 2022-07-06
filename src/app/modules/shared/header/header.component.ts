import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class cHeaderComponent implements OnInit {

  constructor(private oRouter: Router) { }

  ngOnInit(): void {
  }
  cHeaderComponent_logOut()
  {
    localStorage.clear();
    this.oRouter.navigate(["auth/login"]);
  }
  cHeaderComponent_NavigatetoPosts()
  {
    this.oRouter.navigate(["app/posts"]);
  }
  cHeaderComponent_Navigatetousers()
  {
    this.oRouter.navigate(["app/users"]);
  }
}
