import {Component} from "@angular/core";
import {LoginComponent} from "./login.component";
import {SharedData} from "./shared.data";

@Component({
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private sharedData: SharedData) {
    this.sharedData = sharedData;
  }

  getAuthentication() {
    return this.sharedData.readAuthentication();
  }
}
