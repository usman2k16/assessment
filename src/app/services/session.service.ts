import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class cSessionService {

  constructor() { }

  //isLoggedIn
  cSessionService_SetUserSession(data : any)
  {
    JSON.stringify(localStorage.setItem('isLoggedIn',data));
  }
  cSessionService_GetUserSession()
  {
    return JSON.parse(localStorage.getItem('isLoggedIn'));
  }
}
