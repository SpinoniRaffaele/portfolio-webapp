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
    const location = window.navigator.geolocation;
    location.getCurrentPosition((pos) => {
      this.coords = pos.coords;
      console.log(this.coords);
    }
      , (error) => {console.log(error)});
  }

  checkPsw(pwd: string) {
    if (pwd === 'CONNARD123') {
      this.viewContent = true;
    }
    else {
      this.tryAgain = true;
    }
  }
}
