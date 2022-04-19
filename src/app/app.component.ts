import { Component } from '@angular/core';
import { LayoutService } from '@backbase/ui-ang/layout';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated = false;

  constructor(private oAuthService: OAuthService, public layoutService: LayoutService) {
    this.isAuthenticated = oAuthService.hasValidAccessToken();
  }
}
