import { Component } from '@angular/core';
import { PIXEL_HEIGHT_OF_SCROLLING_BEFORE_TOP, officialCertifications, unofficialCertifications } from './certifications.datamodel';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { halfHeaderMenuTransitionTime } from '../shared/transition-timing.datamodel';

const toTheRight: any = {'opacity':'0', 'transform': 'translateX(100%)'};
const toTheLeft: any = {'opacity':'0', 'transform': 'translateX(-100%)'};

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  animations:  [
    trigger('animationTrigger', [
      state('official', style({})),
      state('unofficial', style({})),
      state('officialToUnofficial', style(toTheLeft)),
      state('unofficialToUfficial', style(toTheRight)),
      transition('official => officialToUnofficial', [
        animate(halfHeaderMenuTransitionTime)
      ]),
      transition('officialToUnofficial => unofficial', [
        animate('1ms', style(toTheRight)),
        animate(halfHeaderMenuTransitionTime)
      ]),
      transition('unofficial => unofficialToUfficial', [
        animate(halfHeaderMenuTransitionTime)
      ]),
      transition('unofficialToUfficial => official', [
        animate('1ms', style(toTheLeft)),
        animate(halfHeaderMenuTransitionTime)
      ]),
    ])
  ]
})
export class CertificationsComponent {

  private readonly OFFSET = 5;

  certifications = officialCertifications;

  activeList: "official" | "unofficial" | "officialToUnofficial" | "unofficialToUfficial" = "official";

  constructor() { }

  setCertificationContent(activeList: "official" | "unofficial") {
    this.activeList = this.activeList === "official" ? "officialToUnofficial": "unofficialToUfficial";
    setTimeout(() => {
      if (activeList === 'official') {
        this.certifications = officialCertifications;
      } else {
        this.certifications = unofficialCertifications;
      }
      this.activeList = activeList;
    }, 160);
    window.scrollTo(0, PIXEL_HEIGHT_OF_SCROLLING_BEFORE_TOP + this.OFFSET);
  }
}
