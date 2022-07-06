import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cDataService {

  constructor(private oHttpCient: HttpClient)
  { }

  //getPosts
  cDataService_GetPosts() : Observable<any>
  {
    return this.oHttpCient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
  //getPostDetails
  cDataService_GetPostDetails(nIncommingPostId: number) : Observable<any>
  {
    return this.oHttpCient.get<any>('https://jsonplaceholder.typicode.com/posts/'+nIncommingPostId);
  }
  //getUsers
  cDataService_GetUsers() : Observable<any>
  {
    return this.oHttpCient.get<any>('https://jsonplaceholder.typicode.com/users');
  }
  //getUserDetails
  cDataService_GetUserDetails(nIncommingUserId: number) : Observable<any>
  {
    return this.oHttpCient.get<any>('https://jsonplaceholder.typicode.com/users/'+nIncommingUserId);
  }
  //getUserPosts
  cDataService_GetUserPosts(nIncommingUserId: number) : Observable<any>
  {
    return this.oHttpCient.get<any>('https://jsonplaceholder.typicode.com/posts?userId='+nIncommingUserId);
  }
}
