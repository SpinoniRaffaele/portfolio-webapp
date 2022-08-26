import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { MediaService } from './shared/media.service';
import { ActivatedRoute, PreloadAllModules, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { appRoutes } from './router.config';
import { LoaderComponent } from './loader/loader.component';
import { LoadingInterceptor } from './shared/loading.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageContentComponent,
    ProjectsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
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