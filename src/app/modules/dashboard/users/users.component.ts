import { Component, OnInit } from '@angular/core';
import { cDataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class cUsersComponent implements OnInit {
  lUsers: any = [];
  constructor(private oDataService: cDataService) { }

  ngOnInit(): void {
    this.cUsersComponent_getUsers();
  }
  // get users
  cUsersComponent_getUsers()
  {
    try
    {
      this.oDataService.cDataService_GetUsers().subscribe(
      {
        next: (data) =>
        {
          console.log("cUsersComponent_getUsers: Users ==> ", data)
          this.lUsers = data;
        },
        error: (error) =>
        {
          console.error("cUsersComponent_getUsers: Error ==> ", error)
        }
      });
    }
    catch (error)
    {
      console.error("cUsersComponent_getUsers: Error ==> ", error)
    }
  }

}
