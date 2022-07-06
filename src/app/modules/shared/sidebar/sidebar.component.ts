import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showClass: any;

  constructor(private oRouter : Router)
  {
    if(this.oRouter.url === '/app/posts' || this.oRouter.url === '/app/users')
    {
      this.showClass = this.oRouter.url
    }
  }

  ngOnInit(): void {
  }
  cHeaderComponent_NavigatetoPosts()
  {
    this.oRouter.navigate(["app/posts"]);
  }
  cHeaderComponent_Navigatetousers()
  {
    this.oRouter.navigate(["app/users"]);
  }
  cHeaderComponent_logOut()
  {
    localStorage.clear();
    this.oRouter.navigate(["auth/login"]);
  }
}
