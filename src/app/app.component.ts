import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MediaService } from './shared/media.service';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:  [
    trigger('animationTrigger', [
      state('loaded', style({'opacity':'1'})),
      state('not-loaded', style({'opacity':'0'})), 
      transition('not-loaded => loaded', [animate('1s')]),
      transition('loaded => not-loaded', [animate('0s')])
    ])
  ]
})
export class AppComponent implements OnInit {

  backGroundImagePath: string = "url('../assets/images/background_Home.png')";

  requiresBackGroundSubPath = ['Home', 'Quick%20Links', 'Projects', ''];

  animationState: 'not-loaded' | 'loaded' = 'not-loaded';

  sticky = false;

  isDesktop = true;

  isMenuToggled = false;

  isDark = true;
  
  constructor(
    private mediaService: MediaService, 
    private router: Router,
    private themeService: ThemeService) {}

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(val => this.isDesktop = val);
    this.themeService.isDark.subscribe(val => this.isDark = val)
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.animationState = 'not-loaded';
        if (this.isValidUrl(ev.url)) {
          const url: string = ev.url === '/' ? 'Home' : ev.url.substring(1); 
          this.backGroundImagePath = "url('../assets/images/background_" + url + ".png')";
        } else {
          this.backGroundImagePath = "none";
        }
      }
      if(ev instanceof NavigationEnd) {
        setTimeout(() => {this.animationState = 'loaded'}, 0);
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
