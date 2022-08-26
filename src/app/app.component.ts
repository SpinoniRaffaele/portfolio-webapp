import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Route, Router } from '@angular/router';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-webapp';
  backGroundImagePath: string = '../assets/images/background_Home.png';

  constructor(
    public loaderService: LoaderService, 
    private http: HttpClient, 
    private router: Router) {}

  ngOnInit(): void {
    //fake request to show the loading process, to be update when a backend is used
    this.http.get('', {responseType: 'text'}).subscribe();
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.backGroundImagePath = '../assets/images/background_' + ev.url.substring(1) + '.png';
      }
    });
  }
}
