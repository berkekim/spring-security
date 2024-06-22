import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Credentials} from "./login.component";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.http = http;
    this.router = router;
  }

  authenticate(credentials: Credentials, callback: CallableFunction) {
    if(credentials) {
      this.doAuthenticate(credentials, callback);
    } else {
      alert("No credentials and callback provided!");
    }
  }

  private doAuthenticate(credentials: Credentials, callback: CallableFunction ) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers})
      .subscribe(response => {
        this.authenticated = response !== undefined;
        return callback && callback();
      });
  }

  logout() {
    this.http.post('logout', {})
      .subscribe(value => {
        this.authenticated = false;
        this.router.navigateByUrl('/login');
      });
  }
}
