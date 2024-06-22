import {Component} from "@angular/core";

@Component({
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  greeting = {} as any;

  authenticated() {
    return false;
  }
}
