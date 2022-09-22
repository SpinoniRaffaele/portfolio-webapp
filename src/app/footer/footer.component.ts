import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly sourceCodeLink = "https://github.com/SpinoniRaffaele/portfolio-webapp";

  constructor() { }

  ngOnInit(): void {
  }

}
