import { Component } from '@angular/core';
import { ImageLoaderService } from '../shared/image-loader.service';
import { MediaService } from '../shared/media.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  coords: any = undefined;

  isDesktop = false;

  googlePlayImage = 'url("' + this.imageLoader.loadImage('assets/images/googlePlayBadge.png') + '")';

  constructor(private mediaService: MediaService, public imageLoader: ImageLoaderService) {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  askForCoords() {
    const location = window.navigator.geolocation;
    location.getCurrentPosition((pos) => {
      this.coords = pos.coords;
    }
      , (_) => {this.coords = 'error';});
  }

  openPlayStore() {
    window.open('https://play.google.com/store/apps/details?id=it.kinito&hl=it&gl=US','_newtab');
  }
}
