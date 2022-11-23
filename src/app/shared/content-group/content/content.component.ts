import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaService } from '../../media.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() textContent: string = '';

  private modal: any;

  @Input() imagePath: string = "../../../assets/images/AngularLogo.png";

  isDesktop = true;

  constructor(private readonly mediaService: MediaService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  wrapImagePath(imagePath: string): string {
    return "url('" + imagePath + "')";
  }

  openDialog(content: TemplateRef<any>) {
    this.modal = this.modalService.open(content, { fullscreen: true });
  }
}
