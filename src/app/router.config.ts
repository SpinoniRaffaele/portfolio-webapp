import { Routes } from "@angular/router";
import { AboutMeContentComponent } from "./about-me-content/about-me-content.component";
import { HomePageContentComponent } from "./home-page-content/home-page-content.component";
import { ProjectsComponent } from "./projects/projects.component";

export const appRoutes: Routes = [
    { path: 'Home', component: HomePageContentComponent },
    { path: 'Projects', component: ProjectsComponent },
    { path: 'About me', component: AboutMeContentComponent },
    { path: 'Quick Links', component: ProjectsComponent },
    { path: '**', redirectTo: 'Home' }
  ]