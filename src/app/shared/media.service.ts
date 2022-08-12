import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable()
export class MediaService {
    private isDesktop = new ReplaySubject<boolean>(1);
    public isDesktop$ = this.isDesktop.asObservable();
    private query: string = '(min-width: 768px)';
  
    constructor() {
      // we need to make sure we are in browser
      if (window) {
        const mediaQueryList = window.matchMedia(this.query);
        // here we pass value to our ReplaySubject
        const listener = (event: any) => this.isDesktop.next(event.matches);
        // run once and then add listener
        listener(mediaQueryList);
        mediaQueryList.addEventListener('change', listener);
      }
    }
  }
  