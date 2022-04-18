import { Component } from '@angular/core';
import { LayoutService } from '@backbase/ui-ang/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated = false;

  constructor(public layoutService: LayoutService) {
  }
}
