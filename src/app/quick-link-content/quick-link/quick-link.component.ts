import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ImageLoaderService } from '../../shared/image-loader.service';
import { halfHeaderMenuTransitionTime } from '../../shared/transition-timing.datamodel';
import { QuickLink } from './quick-link-datamodel';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss'],
  animations:  [
    trigger('animationTrigger', [
      state('normal', style({'transform': 'scale(1)'})),
      state('expanded', style({'transform': 'scale(1.2)'})), 
      transition('normal => expanded', [
        animate(halfHeaderMenuTransitionTime, style({'transform': 'scale(1.3)'})),
        animate(halfHeaderMenuTransitionTime)
      ]),
      transition('expanded => normal', [
        animate(halfHeaderMenuTransitionTime, style({'transform': 'scale(0.9)'})),
        animate(halfHeaderMenuTransitionTime)
      ]),
    ])
  ]
})
export class QuickLinkComponent {

  animationStatus: 'normal' | 'expanded' = 'normal';

  @Input() source: QuickLink = {link: '', imagePath: ''};

  constructor(public imageLoader: ImageLoaderService) { }

  pulseIn() {
    this.animationStatus = 'expanded';
  }

  pulseOut() {
    this.animationStatus = 'normal';
  }
}
