import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  viewContent = false;

  tryAgain = false;

  coords: any = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  askForCoords() {
    const location = window.navigator.geolocation;
    location.getCurrentPosition((pos) => {
      this.coords = pos.coords;
    }
      , (error) => {this.coords = 'error';});
  }

  checkPsw(pwd: string) {
    if (pwd === 'CONNARD123') {
      this.viewContent = true;
    }
    else {
      this.tryAgain = true;
    }
  }

  openPlayStore() {
    window.open('https://play.google.com/store/apps/details?id=it.kinito&hl=it&gl=US','_newtab');
  }
}
