import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  private modal: any;

  constructor(private modalService: NgbModal) { }

  openDialog(content: TemplateRef<any>) {
    this.modal = this.modalService.open(content);
  }

  onSubmit() {
    console.log('Should send mail here');
    this.modal.close();
  }

}
