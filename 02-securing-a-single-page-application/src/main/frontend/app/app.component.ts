import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppHeader} from "./app.header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
