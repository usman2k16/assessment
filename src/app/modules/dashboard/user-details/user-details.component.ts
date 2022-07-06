import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cDataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class cUserDetailsComponent implements OnInit {
  oUserDetails: any;
  lUserPosts: any = [];
  constructor(private oActivatedRoute: ActivatedRoute ,private oDataService: cDataService)
  {}

  ngOnInit(): void {
    const nUserId: number = this.oActivatedRoute.snapshot.params['id'];
    this.cUserDetailsComponent_getUserDetails(nUserId);
    this.cUserDetailsComponent_getUserTotalPosts(nUserId);
  }
  //get user details
  cUserDetailsComponent_getUserDetails(nIncommingUserId: number)
  {
    try
    {
      this.oDataService.cDataService_GetUserDetails(nIncommingUserId).subscribe(
      {
        next: (data) =>
        {
          console.log("cUserDetailsComponent_getUserDetails: User ==> ", data);
          this.oUserDetails = data;
        },
        error: (error) =>
        {
          console.error("cUserDetailsComponent_getUserDetails: Error ==> ", error)
        }
      });
    }
    catch (error)
    {
      console.error("cUserDetailsComponent_getUserDetails: Error ==> ", error)
    }
  }
  //get user posts
  cUserDetailsComponent_getUserTotalPosts(nIncommingUserId: number)
  {
    try
    {
      this.oDataService.cDataService_GetUserPosts(nIncommingUserId).subscribe(
      {
        next: (data) =>
        {
          console.log("cUserDetailsComponent_getUserTotalPosts: User ==> ", data);
          this.lUserPosts = data;
        },
        error: (error) =>
        {
          console.error("cUserDetailsComponent_getUserTotalPosts: Error ==> ", error)
        }
      });
    }
    catch (error)
    {
      console.error("cUserDetailsComponent_getUserTotalPosts: Error ==> ", error)
    }
  }
}
