import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PIXEL_HEIGHT_OF_SCROLLING_BEFORE_TOP } from '../certifications.datamodel';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-certification-nav',
  templateUrl: './certification-nav.component.html',
  styleUrls: ['./certification-nav.component.scss']
})
export class CertificationNavComponent implements OnInit {

  @Output() activeListEmitter = new EventEmitter();

  activeList: "official" | "unofficial" = "official";

  scroll: number = 0;

  isDark: boolean = true;

  constructor(private readonly themeService: ThemeService) {
    window.document.addEventListener('scroll', () => {
      this.scroll = window.scrollY;
    });
  }

  ngOnInit(): void {
    this.themeService.isDark.subscribe(value => this.isDark = value);
  }

  isOfficial() {
    return this.activeList === "official";
  }

  setActiveList(activeList: "official" | "unofficial") {
    this.activeList = activeList;
    this.activeListEmitter.emit(activeList);
  }

  hasScrolledTheHeader() {
    return this.scroll > PIXEL_HEIGHT_OF_SCROLLING_BEFORE_TOP;
  }
}
