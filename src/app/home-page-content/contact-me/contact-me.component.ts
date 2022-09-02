import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MailAPIService } from 'src/app/shared/mail-api.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  private modal: any;

  constructor(private modalService: NgbModal, private mailAPIService: MailAPIService) { }

  openDialog(content: TemplateRef<any>) {
    this.modal = this.modalService.open(content);
  }

  onSubmit() {
    this.mailAPIService.sendMail();
    this.modal.close();
  }

}
