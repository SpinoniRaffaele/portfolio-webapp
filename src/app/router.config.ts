import { Routes } from "@angular/router";
import { HomePageContentComponent } from "./home-page-content/home-page-content.component";
import { ProjectsComponent } from "./projects/projects.component";

export const appRoutes: Routes = [
    { path: '', component: HomePageContentComponent },
    { path: 'Home', component: HomePageContentComponent },
    { path: 'Projects', component: ProjectsComponent },
    { path: 'About me', component: ProjectsComponent },
    { path: 'Quick Links', component: ProjectsComponent }
  ]