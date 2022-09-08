import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';

@Component({
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.scss']
})
export class HomePageContentComponent implements OnInit {

  public isDesktop: boolean = true;

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

}
