import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { headerList } from './header.datamodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostBinding('style.border-radious') borderRadious!: string;

  @Output() isMenuToggledEmitter = new EventEmitter();

  isDesktop: boolean = false;

  isMenuToggled: boolean = false;

  headerList = headerList;

  constructor(private readonly mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  toggleMenu(event: any) {
    this.isMenuToggled = event.target.checked;
    this.isMenuToggledEmitter.emit(this.isMenuToggled);
  }

  closeMenu() {
    this.isMenuToggled = false;
    this.isMenuToggledEmitter.emit(this.isMenuToggled);
  }
}
