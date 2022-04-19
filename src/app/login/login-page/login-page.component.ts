import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent  {

  constructor(public oAuthService: OAuthService) { }

  login(): void {
    this.oAuthService.initLoginFlow();
  }

}
