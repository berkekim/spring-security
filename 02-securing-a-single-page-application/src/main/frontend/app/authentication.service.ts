import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Credentials} from "./login.component";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient = httpClient;
    this.router = router;
  }

  authenticate(credentials: Credentials): Observable<Authentication> {
    return credentials ? this.doAuthenticate(credentials) :
      of(Authentication.noOpAuthenticationWithMessage("No credentials and callback provided!"));
  }

  private doAuthenticate(credentials: Credentials): Observable<Authentication> {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    return this.httpClient.get<User>('http://localhost:8080/users', {headers: headers})
      .pipe(map(user => Authentication.withUsername(user.principal.username)));
  }

  logout() {
    this.httpClient.post('logout', {})
      .subscribe(value => {
        this.router.navigateByUrl('/login');
      });
  }
}

export interface Principal {
  username: string;
  enabled: boolean;
}

export interface User {
  authenticated: boolean;
  principal: Principal;
}

export class Authentication {
  username: string = "";
  authenticated: boolean = false;
  message: string = "";

  constructor(username: string, authenticated: boolean, message: string) {
    this.username = username;
    this.authenticated = authenticated;
    this.message = message;
  }

  static of(username: string, authenticated: boolean, message: string) {
    return new Authentication(username, authenticated, message);
  }

  static withUsername(username: string) {
    return new Authentication(username, true, "Authentication Successful!");
  }

  static noOpAuthentication() {
    return new Authentication("no-username", false, "No authentication");
  }

  static noOpAuthenticationWithMessage(message: string) {
    return new Authentication("no-username", false, message);
  }
}
