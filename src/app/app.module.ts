import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { MediaService } from './shared/media.service';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { appRoutes } from './router.config';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoadingInterceptor } from './shared/loading.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContactMeComponent } from './home-page-content/contact-me/contact-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutMeContentComponent } from './about-me-content/about-me-content.component';
import { ContentGroupComponent } from './shared/content-group/content-group.component';
import { ContentComponent } from './shared/content/content.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageContentComponent,
    ProjectsComponent,
    LoaderComponent,
    ContactMeComponent,
    HeaderMenuComponent,
    AboutMeContentComponent,
    ContentGroupComponent,
    ContentComponent,
    ThemeSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    HammerModule
  ],
  providers: [
    MediaService,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
