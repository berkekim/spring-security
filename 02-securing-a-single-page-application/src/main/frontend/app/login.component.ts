import {Component} from "@angular/core";
import {Authentication, AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Subscription} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {SharedData} from "./shared.data";

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    FormsModule,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: Credentials;
  error: boolean = false;
  authenticated: boolean = false;
  authentication$!: Subscription;

  constructor(private authenticationService: AuthenticationService,
              private router: Router, private sharedData: SharedData) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.sharedData = sharedData;
    this.credentials = {username: '', password: ''};
  }

  login() {
    this.authentication$ = this.authenticationService.authenticate(this.credentials)
      .subscribe({
        next: authentication => {
          if (authentication.authenticated) {
            this.authenticated = true;
            this.error = false;
            this.sharedData.writeAuthentication(authentication);
            this.router.navigateByUrl('/');
          }
        },
        error: error => {
          console.log(error);
          this.error = true;
          this.authenticated = false;
          this.sharedData.writeAuthentication(Authentication.noOpAuthentication());
        }
      });
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
