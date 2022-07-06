import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { cHeadersInterceptor } from 'src/interceptors/headers.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { cBlankComponent } from './layouts/blank/blank.component';
import { cFullComponent } from './layouts/full/full.component';
import { cAuthGuard } from './guards/auth.guard';
import { cAuthService } from './services/auth.service';
import { cDataService } from './services/data.service';
import { cSessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    cBlankComponent,
    cFullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    cAuthGuard,
    cAuthService,
    cDataService,
    cSessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
