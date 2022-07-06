import { Injectable } from '@angular/core';
import { cSessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class cAuthService {
  private oUserPermissions: any =
  {
    catalog: {
      read: false,
    },
    users: {
      read: false,
    },
  }
  constructor(private oSessionService: cSessionService) {}

  //save session
  cAuthService_saveSession()
  {
    this.oSessionService.cSessionService_SetUserSession(true)
  }

  //set permissions
  cAuthService_setPermission() {
    this.oUserPermissions.catalog.read = true;
    this.oUserPermissions.users.read = true;
    console.log('cAuthService_setPermission : Permissions ==> ',this.oUserPermissions);
  }

  //get permissions
  cAuthService_getPermission() {
    return this.oUserPermissions;
  }
}
