import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { ContentInfo } from './content-group.datamodel';

@Component({
  selector: 'app-content-group',
  templateUrl: './content-group.component.html',
  styleUrls: ['./content-group.component.scss']
})
export class ContentGroupComponent implements OnInit {

  @Input() contentGroupInfo: ContentInfo[] = [{imagePath: '', text: ''}];

  selectedContent: number = 0;

  isDesktop = true;

  constructor(private readonly mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  isLastContent(): boolean {
    return this.selectedContent === this.contentGroupInfo.length - 1;
  }

  isFirstContent(): boolean {
    return this.selectedContent === 0;
  }

  changeComponent(goingForward: boolean) {
    if (goingForward && !this.isLastContent()) {
      this.selectedContent++;
    }
    if (!goingForward && !this.isFirstContent()) {
      this.selectedContent--;
    }
  }

}
