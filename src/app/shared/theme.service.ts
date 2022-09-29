import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark = new BehaviorSubject(true);

  constructor() {  }

  setTheme(isDark: boolean) {
    this.isDark.next(isDark);
  }

  getTheme() {
    return this.isDark.getValue();
  }
  
}
