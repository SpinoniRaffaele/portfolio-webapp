import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-webapp';

  constructor(public loaderService: LoaderService, private http: HttpClient) {}

  ngOnInit(): void {
    //fake request to show the loading process, to be update when a backend is used
    this.http.get('', {responseType: 'text'}).subscribe();
  }
}
