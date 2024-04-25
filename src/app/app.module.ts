import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { MediaService } from './shared/media.service';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { appRoutes } from './router.config';
import { HttpClientModule } from '@angular/common/http';
import { ContactMeComponent } from './home-page-content/contact-me/contact-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutMeContentComponent } from './about-me-content/about-me-content.component';
import { ContentGroupComponent } from './shared/content-group/content-group.component';
import { ContentComponent } from './shared/content-group/content/content.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { QuickLinkContentComponent } from './quick-link-content/quick-link-content.component';
import { QuickLinkComponent } from './quick-link-content/quick-link/quick-link.component';
import { MeteoVisualizerComponent } from './projects/meteo-visualizer/meteo-visualizer.component';
import { MeteoTimePointComponent } from './projects/meteo-visualizer/meteo-time-point/meteo-time-point.component';
import { PrecipitationAmountPipe } from './projects/meteo-visualizer/precipitation-amount.pipe';
import { CertificationsComponent } from './certifications-content/certifications.component';
import { CertificationNavComponent } from './certifications-content/certification-nav/certification-nav.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

declare var Hammer: any;

@Injectable()
export class MyHammerConfig extends HammerGestureConfig  {
  override buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageContentComponent,
    ProjectsComponent,
    ContactMeComponent,
    HeaderMenuComponent,
    AboutMeContentComponent,
    ContentGroupComponent,
    ContentComponent,
    ThemeSelectorComponent,
    QuickLinkContentComponent,
    QuickLinkComponent,
    MeteoVisualizerComponent,
    MeteoTimePointComponent,
    PrecipitationAmountPipe,
    CertificationsComponent,
    CertificationNavComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    HammerModule,
    BrowserAnimationsModule
  ],
  providers: [
    MediaService,
    HttpClientModule,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
