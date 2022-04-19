import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule, LogoModule } from '@backbase/ui-ang';

import { OAuthModule, AuthConfig, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

import { authConfig } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LogoModule,
    OAuthModule.forRoot(),
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
