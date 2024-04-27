import { AfterViewInit, Component, ElementRef, Inject, LOCALE_ID, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements AfterViewInit {

  @ViewChild('flag') shownFlagElement!: ElementRef;

  constructor(private render: Renderer2, @Inject(LOCALE_ID) public activeLocale: string) {}

  ngAfterViewInit() {
    this.render.addClass(this.shownFlagElement.nativeElement, `fi-${languageTagToFlagTag[this.activeLocale]}`);
  }

  onChange(locale: string) {
    if (this.activeLocale !== locale) {
      this.render.removeClass(this.shownFlagElement.nativeElement, `fi-${languageTagToFlagTag[this.activeLocale]}`);
      this.render.addClass(this.shownFlagElement.nativeElement, `fi-${languageTagToFlagTag[locale]}`);
      this.activeLocale = locale;
      location.href = location.origin + `/${locale}`;
    }
  }
}

export type flagTag = "it" | "us";

export const languageTagToFlagTag: any = {
  "it": "it",
  "en-US": "us"
}