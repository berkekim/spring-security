import {Component} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: Credentials;
  error: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.credentials = {username: '', password: ''};
  }

  login() {
    this.authenticationService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    });
    this.error = true;
    return false;
  }

  getAuthenticationStatus() {
    return this.authenticationService.authenticated;
  }
}

export class Credentials {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
