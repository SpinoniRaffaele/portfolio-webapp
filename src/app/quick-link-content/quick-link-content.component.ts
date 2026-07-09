import { Component, OnInit } from '@angular/core';
import { linkData, QuickLink } from './quick-link/quick-link-datamodel';

@Component({
    selector: 'app-quick-link-content',
    templateUrl: './quick-link-content.component.html',
    styleUrls: ['./quick-link-content.component.scss'],
    standalone: false
})
export class QuickLinkContentComponent implements OnInit {

  readonly linkData: QuickLink[] =  linkData;

  constructor() { }

  ngOnInit(): void {
  }

}
