import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'simple-resource',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './simple.resource.html'
})
export class SimpleResource {
  data = {} as any;

  constructor(private httpClient: HttpClient) {
    this.data.id = "No id retrieved yet"
    this.data.content = "No content found yet";
    this.httpClient = httpClient;
  }

  getData() {
    this.httpClient.get('http://localhost:8080/resources')
      .subscribe(data => {
        this.data = data
        return data;
      });
  }
}
