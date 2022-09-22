import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.scss']
})
export class HomePageContentComponent implements OnInit {

  isDesktop: boolean = true;

  isDark: boolean = true;

  constructor(private mediaService: MediaService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
    this.themeService.isDark.subscribe(value => this.isDark = value);
  }
}
