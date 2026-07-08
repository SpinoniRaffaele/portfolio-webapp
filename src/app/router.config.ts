import {Routes} from "@angular/router";
import {HomePageContentComponent} from "./home-page-content/home-page-content.component";
import {ProjectsComponent} from "./projects/projects.component";
import {QuickLinkContentComponent} from "./quick-link-content/quick-link-content.component";
import {CertificationsComponent} from "./certifications-content/certifications.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomePageContentComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'quick-links', component: QuickLinkContentComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: '**', redirectTo: 'home' }
  ]