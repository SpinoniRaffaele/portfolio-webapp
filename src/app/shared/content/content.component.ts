import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() textContent: string = '';

  @Input() imagePath: string = "../../../assets/images/AngularLogo.png";

  isDesktop = true;

  constructor(private readonly mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  wrapImagePath(imagePath: string): string {
    return "url('" + imagePath + "')";
  }

}
