import { Component, Input, OnInit } from '@angular/core';
import { QuickLink } from './quick-link-datamodel';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss']
})
export class QuickLinkComponent implements OnInit {

  @Input() source: QuickLink = {link: '', imagePath: '../../assets/images/AngularLogo.png'};

  constructor() { }

  ngOnInit(): void {
  }

}
