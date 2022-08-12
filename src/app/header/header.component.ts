import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { HeaderElement } from './header.datamodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDesktop: boolean = false;

  headerList: HeaderElement[] = [
    { label: 'Home' },
    { label: 'About me' },
    { label: 'Quick Links' },
    { label: 'Projects' }
];

  constructor(private readonly mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }
}
