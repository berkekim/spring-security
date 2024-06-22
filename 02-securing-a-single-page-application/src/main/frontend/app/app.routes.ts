import {Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];
