import { Component, HostBinding, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { headerList } from './header.datamodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostBinding('style.border-radious') borderRadious!: string;

  isDesktop: boolean = false;

  isMenuToggled: boolean = false;

  headerList = headerList;

  constructor(private readonly mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  toggleMenu(event: any) {
    this.isMenuToggled = event.target.checked;
  }

  closeMenu(event: any) {
    this.isMenuToggled = false;
    console.log(this.isMenuToggled);
  }
}
