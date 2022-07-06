import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cDataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class cPostDetailsComponent implements OnInit {

  oUserDetails: any;
  oPostDetails: any;
  constructor(private oActivatedRoute: ActivatedRoute ,private oDataService: cDataService,private oRouter : Router)
  {}

  ngOnInit(): void {
    const nPostId: number = this.oActivatedRoute.snapshot.params['postId'];
    const nUserId: number = this.oActivatedRoute.snapshot.params['userId'];
    this.cPostDetailsComponent_getPostDetails(nPostId);
    this.cPostDetailsComponent_getUserDetails(nUserId)
  }
  //get post details
  cPostDetailsComponent_getPostDetails(nIncommingUserId: number)
  {
    try
    {
      this.oDataService.cDataService_GetUserDetails(nIncommingUserId).subscribe(
      {
        next: (data) =>
        {
          console.log("cPostDetailsComponent_getPostDetails: Post ==> ", data)
          this.oPostDetails = data;
        },
        error: (error) =>
        {
          console.error("cPostDetailsComponent_getPostDetails: Error ==> ", error)
        }
      });
    }
    catch (error)
    {
      console.error("cPostDetailsComponent_getPostDetails: Error ==> ", error)
    }
  }
  //get user details
  cPostDetailsComponent_getUserDetails(nIncommingUserId: number)
  {
    try
    {
      this.oDataService.cDataService_GetUserDetails(nIncommingUserId).subscribe(
      {
        next: (data) =>
        {
          console.log("cPostDetailsComponent_getUserDetails: User ==> ", data);
          this.oUserDetails = data;
        },
        error: (error) =>
        {
          console.error("cPostDetailsComponent_getUserDetails: Error ==> ", error)
        }
      });
    }
    catch (error)
    {
      console.error("cPostDetailsComponent_getUserDetails: Error ==> ", error)
    }
  }
  //go to user details
  cPostDetailsComponent_navigateToUserDetailsPage(nIncomminguserId: number)
  {
    this.oRouter.navigate(['app/user/'+nIncomminguserId]);
  }

}
