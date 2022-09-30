import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  viewContent = false;

  tryAgain = false;

  constructor() { }

  ngOnInit(): void {
  const uluru = { lat: -25.344, lng: 131.031 };
  //@ts-ignore
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: uluru,
    }
  );

  //@ts-ignore
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
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
