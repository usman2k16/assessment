import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cDataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class cPostsComponent implements OnInit {
  lPosts: any = [];
  constructor(private oDataService: cDataService, private oRouter: Router) { }

  ngOnInit(): void {
    this.cPostsComponent_getPosts();
  }
  // get posts
  cPostsComponent_getPosts()
  {
    try
    {
      this.oDataService.cDataService_GetPosts().subscribe(
      {
        next: (data) =>
        {
          console.log("cPostsComponent_getPosts: Posts ==> ", data)
          this.lPosts = data;
        },
        error: (error) =>
        {
          console.error("cPostsComponent_getPosts: Error ==> ", error)
        }
      });
    }
    catch (error)
    {
      console.error("cPostsComponent_getPosts: Error ==> ", error)
    }
  }
  //go to post details
  cPostsComponent_NavigateToPostDetails(nIncommingPostId: number, nIncommingUserId: number)
  {
    this.oRouter.navigate(['app/post/'+nIncommingPostId+"/"+nIncommingUserId]);
  }
}
