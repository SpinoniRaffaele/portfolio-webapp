import { Component } from '@angular/core';
import { MediaService } from '../shared/media.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  coords: any = undefined;

  isDesktop = false;

  constructor(private mediaService: MediaService) {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  askForCoords() {
    const location = window.navigator.geolocation;
    location.getCurrentPosition((pos) => {
      console.log(pos);
      this.coords = pos.coords;
    }
      , (error) => {this.coords = 'error'; console.log(error)});
  }

  openPlayStore() {
    window.open('https://play.google.com/store/apps/details?id=it.kinito&hl=it&gl=US','_newtab');
  }
}
