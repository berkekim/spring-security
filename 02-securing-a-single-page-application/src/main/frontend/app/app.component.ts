import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Grasshopper';
  data = {}  as any;
  constructor(private http: HttpClient) {
    this.data.id = "No id retrieved yet"
    this.data.content = "No content found yet"  ;
    this.http = http;
  }

  getData() {
    this.http.get('http://localhost:8080/resources')
      .subscribe(data => {
        this.data = data
        return data;
      });
  }
}
