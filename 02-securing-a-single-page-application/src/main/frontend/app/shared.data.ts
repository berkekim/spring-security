import {Injectable} from "@angular/core";
import {Authentication} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class SharedData {
  private authentication: Authentication = Authentication.noOpAuthentication();

  writeAuthentication(authentication: Authentication) {
    this.authentication = authentication;
  }

  readAuthentication() {
    return this.authentication;
  }
}
