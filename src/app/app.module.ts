import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { MediaService } from './shared/media.service';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { appRoutes } from './router.config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageContentComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
