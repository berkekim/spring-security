import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {SharedData} from "./shared.data";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.header.html'
})
export class AppHeader {
  sharedData: SharedData;

  constructor(private authenticationService: AuthenticationService, sharedData: SharedData) {
    this.authenticationService = authenticationService;
    this.sharedData = sharedData;
  }

  logout() {
    this.authenticationService.logout();
  }
}
