import { Component } from '@angular/core';
import { contactMeContent } from '../home-page-content/contact-me/contact-me-content.datamodel';

@Component({
  selector: 'app-about-me-content',
  templateUrl: './about-me-content.component.html',
  styleUrls: ['./about-me-content.component.scss']
})
export class AboutMeContentComponent {

  contentInfo = contactMeContent;

  constructor() { }
}
