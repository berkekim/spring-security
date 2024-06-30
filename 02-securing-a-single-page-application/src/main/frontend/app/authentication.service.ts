import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Credentials} from "./login.component";
import {map, Observable, of} from "rxjs";
import {SharedData} from "./shared.data";
import {ArgumentPreconditions} from "./argument.preconditions";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationConstructsFactory: AuthenticationConstructsFactory = new AuthenticationConstructsFactory();

  constructor(private httpClient: HttpClient, private router: Router, private sharedData: SharedData) {
    this.httpClient = httpClient;
    this.router = router;
    this.sharedData = sharedData;
  }

  authenticate(credentials: Credentials): Observable<Authentication> {
    return credentials ? this.doAuthenticate(credentials) :
      of(Authentication.noOpAuthenticationWithMessage("No credentials and callback provided!"));
  }

  private doAuthenticate(credentials: Credentials): Observable<Authentication> {
    return this.httpClient.get<User>('http://localhost:8080/users',
      {headers: this.authenticationConstructsFactory.createHttpHeadersForBasicAuthentication(credentials)})
      .pipe(map(user => Authentication.withUsername(user.principal.username)));
  }

  logout() {
    this.httpClient.post('logout', {})
      .subscribe(value => {
        this.sharedData.writeAuthentication(Authentication.noOpAuthenticationWithMessage("Authentication logged out!"));
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

export interface Base64EncodingStrategy {
  encode(credentials: Credentials): string;
}

export class LegacyBase64EncodingStrategy implements Base64EncodingStrategy {
  encode(credentials: Credentials): string {
    return btoa(credentials.username + ':' + credentials.password);
  }
}

export class BufferedBase64EncodingStrategy implements Base64EncodingStrategy {
  encode(credentials: Credentials): string {
    return Buffer.from(credentials.username + ':' + credentials.password, 'base64')
      .toString('base64');
  }
}

export class AuthenticationConstructsFactory {
  private base64EncodingStrategy: Base64EncodingStrategy = new LegacyBase64EncodingStrategy();

  setBase64EncodingStrategy(value: Base64EncodingStrategy) {
    this.base64EncodingStrategy = value;
  }

  createHttpHeadersForBasicAuthentication(credentials: Credentials) {
    ArgumentPreconditions.requireNonNull("Authentication credentials must be provided", credentials);
    return new HttpHeaders(credentials ? {
      authorization: 'Basic ' + this.base64EncodingStrategy.encode(credentials)
    } : {});
  }
}
