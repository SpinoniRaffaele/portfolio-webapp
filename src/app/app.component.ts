import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { appRoutes } from './router.config';
import { LoaderService } from './shared/loader.service';
import { MediaService } from './shared/media.service';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  backGroundImagePath: string = '../assets/images/background_Home.png';

  isDesktop = true;

  isMenuToggled = false;

  isDark = true;
  
  constructor(
    public loaderService: LoaderService, 
    private http: HttpClient,
    private mediaService: MediaService, 
    private router: Router,
    private themeService: ThemeService) {}

  ngOnInit(): void {
    //fake request to show the loading process
    this.http.get('', {responseType: 'text'}).subscribe();
    this.mediaService.isDesktop$.subscribe(val => this.isDesktop = val);
    this.themeService.isDark.subscribe(val => this.isDark = val)
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart && this.isValidUrl(ev.url)) {
        this.backGroundImagePath = '../assets/images/background_' + ev.url.substring(1) + '.png';
      }
    });
  }

  private isValidUrl(url: string): boolean {
    var isFound: boolean = false;
    appRoutes.forEach(route => {
      if (route.path === url.substring(1).replace('%20', ' ')) {
        isFound = true;
      }
    });
    return isFound;
  }
}
