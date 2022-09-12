import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderElement, headerList } from '../header.datamodel';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  headerList: HeaderElement[] = headerList;

  @Output() menuItemSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
