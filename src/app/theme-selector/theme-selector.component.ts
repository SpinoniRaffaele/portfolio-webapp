import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  isDark = true;

  isDesktop = true;

  constructor(private mediaService: MediaService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(isDesktop => this.isDesktop = isDesktop);
  }

  toggleDarkMode(isDark: boolean) {
    if (isDark !== this.isDark) {
      this.isDark = isDark;
      this.themeService.setTheme(isDark);
    }
  }

}
