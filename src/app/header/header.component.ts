import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { headerMenuTransitionTime } from '../shared/transition-timing.datamodel';
import { headerList } from './header.datamodel';

const disappearedMenuStyle: any = {'opacity':'0', 'transform': 'translateY(-400px)'};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:  [
    trigger('animationTrigger', [
      state('in', style({})),
      transition('void => *', [
        style(disappearedMenuStyle), 
        animate(headerMenuTransitionTime + ' ease-out')
      ]),
      transition('* => void', 
        animate(headerMenuTransitionTime + ' ease-in', style(disappearedMenuStyle))
      )
    ])
  ]
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

  toggleMenu(isOpening: boolean) {
      this.isMenuToggled = isOpening;
      this.isMenuToggledEmitter.emit(this.isMenuToggled);
  }
}
