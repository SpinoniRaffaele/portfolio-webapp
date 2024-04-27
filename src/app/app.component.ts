import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ImageLoaderService } from './shared/image-loader.service';
import { MediaService } from './shared/media.service';
import { ThemeService } from './shared/theme.service';
import { contentFadeInTransitionTime, headerMenuTransitionTime } from './shared/transition-timing.datamodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:  [
    trigger('animationTrigger', [
      state('loaded', style({'opacity':'1'})),
      state('not-loaded', style({'opacity':'0'})), 
      transition('not-loaded => loaded', [animate(contentFadeInTransitionTime + ' ' + headerMenuTransitionTime)]),
      transition('loaded => not-loaded', [animate('0s')])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  backGroundImagePathWrapped: string = 
  "url('" + this.imageLoader.loadImage('assets/images/background_Home.png') + "')";

  requiresBackGroundSubPath = ['home', 'quick-links', 'projects', ''];

  animationState: 'not-loaded' | 'loaded' = 'not-loaded';

  sticky = false;

  isDesktop = true;

  isMenuToggled = false;

  isDark = true;

  browserName: 'undefined' | 'chrome' | 'firefox' | 'safari' | 'opera' | 'edge' = 'undefined';
  
  constructor(
    private mediaService: MediaService, 
    private router: Router,
    private themeService: ThemeService,
    public imageLoader: ImageLoaderService) {}

  ngOnInit(): void {
    this.imageLoader.preloadImages();
    this.checkBrowser();
    this.mediaService.isDesktop$.subscribe(val => this.isDesktop = val);
    this.themeService.isDark.subscribe(val => this.isDark = val)
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.animationState = 'not-loaded';
        if (this.isValidUrl(ev.url)) {
          const url: string = ev.url === '/' ? 'home' : ev.url.substring(1); 
          this.backGroundImagePathWrapped = 
          "url('" + this.imageLoader.loadImage("assets/images/background_" + url + ".png") + "')";
        } else {
          this.backGroundImagePathWrapped = "none"
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

  checkBrowser() {
    let userAgent = navigator.userAgent;
    if(userAgent.indexOf('Chrom') !== -1){
        this.browserName = "chrome";
      }else if(userAgent.indexOf('Firefox') !== -1 || userAgent.indexOf('Fxios') !== -1){
        this.browserName = "firefox";
      }  else if(userAgent.indexOf('Safari') !== -1 ){
        this.browserName = "safari";
      }else if(userAgent.indexOf('opr') !== -1){
        this.browserName = "opera";
      } else if(userAgent.indexOf('Edg') !== -1){
        this.browserName = "edge";
      } 
      if (this.browserName === 'undefined') {
        alert("Your browser is currently not fully supported 😪, consider changing it for an otpimal experience");
      }
  }

  ngOnDestroy(): void {
    this.imageLoader.emptyLocalStorage();
  }
}
