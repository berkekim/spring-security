import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.http = http;
    this.router = router;
  }

  logout() {
    this.http.post('logout', {})
      .subscribe(value => {
        this.authenticated = false;
        this.router.navigateByUrl('/login');
      });
  }
}
