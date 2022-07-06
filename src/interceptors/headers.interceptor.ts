import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class cHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   //modify headers accordingly
    let oHeaders  =
    {
      "accept": "**",
      "content-type": "application/json",
    }

    let oRequestWithHeaders = request.clone(
      {
        setHeaders: oHeaders
      }
    );
    return next.handle(oRequestWithHeaders);
  }
}
