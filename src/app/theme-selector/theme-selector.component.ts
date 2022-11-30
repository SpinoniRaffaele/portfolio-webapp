import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  animations:  [
    trigger('animationTrigger', [
      state('in', style({})),
      transition('void => *', [
        style({'opacity':'0'}), 
        animate(1000)
      ])
    ])
  ]
})
export class ThemeSelectorComponent implements OnInit {

  animationState = '';

  isDark = true;

  isDesktop = true;

  constructor(private mediaService: MediaService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this.themeService.getTheme();
    this.mediaService.isDesktop$.subscribe(isDesktop => this.isDesktop = isDesktop);
  }

  toggleDarkMode(isDark: boolean) {
    if (isDark !== this.isDark) {
      this.isDark = isDark;
      this.themeService.setTheme(isDark);
    }
  }

}
