import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoaderService } from './shared/loader.service';
import { MediaService } from './shared/media.service';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  backGroundImagePath: string = "url('../assets/images/background_Home.png')";

  requiresBackGroundSubPath = ['Home', 'Quick%20Links', 'Projects', ''];

  sticky = false;

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
      if (ev instanceof NavigationStart) {
        if (this.isValidUrl(ev.url)) {
          const url: string = ev.url === '/' ? 'Home' : ev.url.substring(1); 
          this.backGroundImagePath = "url('../assets/images/background_" + url + ".png')";
        } else {
          this.backGroundImagePath = "none";
        }
      }
    });
  }

  private isValidUrl(url: string): boolean {
    let found: boolean = false;
    this.requiresBackGroundSubPath.forEach(subPath => {
      if (url.substring(1) === subPath) {
        found = true;
      }
    });
    return found;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= 100){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
