import { Component } from '@angular/core';
import { aboutMeContent } from './about-me-content.datamodel';

@Component({
  selector: 'app-about-me-content',
  templateUrl: './about-me-content.component.html',
  styleUrls: ['./about-me-content.component.scss']
})
export class AboutMeContentComponent {

  aboutMeContent = aboutMeContent;

  constructor() { }
}
