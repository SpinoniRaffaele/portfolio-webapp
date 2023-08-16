import { Routes } from "@angular/router";
import { AboutMeContentComponent } from "./about-me-content/about-me-content.component";
import { HomePageContentComponent } from "./home-page-content/home-page-content.component";
import { ProjectsComponent } from "./projects/projects.component";
import { QuickLinkContentComponent } from "./quick-link-content/quick-link-content.component";
import { CertificationsComponent } from "./certifications-content/certifications.component";

export const appRoutes: Routes = [
    { path: 'Home', component: HomePageContentComponent },
    { path: 'Projects', component: ProjectsComponent },
    { path: 'About me', component: AboutMeContentComponent },
    { path: 'Quick Links', component: QuickLinkContentComponent },
    { path: 'Certifications', component: CertificationsComponent },
    { path: '**', redirectTo: 'Home' }
  ]