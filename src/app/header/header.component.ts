import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { HeaderElement, headerList } from './header.datamodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDesktop: boolean = false;

  headerList = headerList;

  constructor(private readonly mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }
}
