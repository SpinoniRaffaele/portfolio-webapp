import { Component, Input, OnInit } from '@angular/core';
import { ImageLoaderService } from 'src/app/shared/image-loader.service';
import { QuickLink } from './quick-link-datamodel';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss']
})
export class QuickLinkComponent implements OnInit {

  @Input() source: QuickLink = {link: '', imagePath: ''};

  constructor(public imageLoader: ImageLoaderService) { }

  ngOnInit(): void {
  }

}
