import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule, LogoModule } from '@backbase/ui-ang';

import { OAuthModule, AuthConfig, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

import { authConfig, environment } from 'src/environments/environment';

import { ACCESS_CONTROL_BASE_PATH } from '@backbase/data-ang/accesscontrol';

import { AuthGuard } from './guards/auth.guard';

import { ARRANGEMENT_MANAGER_BASE_PATH } from '@backbase/data-ang/arrangements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LogoModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.apiRoot],
        sendAccessToken: true
      }
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthConfig,
      useValue: authConfig
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ OAuthService ],
      useFactory: (oAuthService: OAuthService) => () =>
        oAuthService.loadDiscoveryDocumentAndTryLogin().then(() =>
          oAuthService.setupAutomaticSilentRefresh()
        )
    },
    { provide: OAuthStorage, useFactory: () => localStorage },
    {
      provide: ACCESS_CONTROL_BASE_PATH,
      useValue: `${environment.apiRoot}/access-control`
    },
    AuthGuard,
    {
      provide: ARRANGEMENT_MANAGER_BASE_PATH,
      useValue: environment.apiRoot+'/arrangement-manager'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
