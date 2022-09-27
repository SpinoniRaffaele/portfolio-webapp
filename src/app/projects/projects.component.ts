import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
