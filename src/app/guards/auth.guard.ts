import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { cAuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class cAuthGuard implements CanActivate
{
  constructor(private oAuthService: cAuthService,private oRouter: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      const oUserPermissions: any = this.oAuthService.cAuthService_getPermission();
      const sURL: string = state.url;
      console.log("Guard Router == > ",sURL)
      if(sURL.includes('post'))
      {
        if(oUserPermissions.catalog.read)
        {
           return true;
        }
        else
        {
          this.oRouter.navigate(["auth/login"]);
          return false;
        }
      }
      else if(sURL.includes('user'))
      {
        if(oUserPermissions.users.read)
        {
          return true;
        }
        else
        {
          this.oRouter.navigate(["auth/login"]);
          return false;
        }
        // return oUserPermissions.users.read;
      }
      else
      {
        return true;
      }
  }
}

