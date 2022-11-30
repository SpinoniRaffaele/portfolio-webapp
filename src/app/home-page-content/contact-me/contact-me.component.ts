import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MailAPIService } from 'src/app/shared/mail-api.service';
import { MediaService } from 'src/app/shared/media.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  isDesktop = true;

  readonly mailRegEx: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  private modal: any;

  sendButtonMessage: string = 'Send';

  sendEmpty: boolean;

  formGroup: FormGroup;

  isLoading: boolean = false;;

  constructor(
    private modalService: NgbModal, 
    private mailAPIService: MailAPIService, 
    private formBuilder: FormBuilder,
    private mediaService: MediaService) {
      this.formGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.pattern(this.mailRegEx)]),
        body: new FormControl('', [Validators.required])
      });
      this.sendEmpty = false;
    }

  ngOnInit() {
    this.mediaService.isDesktop$.subscribe(val => this.isDesktop = val);
  }

  openDialog(content: TemplateRef<any>) {
    this.modal = this.modalService.open(content);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.isLoading = true;
      this.sendButtonMessage = 'Sending...';
      this.mailAPIService.sendMail(this.formGroup.controls['email'].value, this.formGroup.controls['body'].value)
      .subscribe(res => {
        this.isLoading = false;
        if(this.mailAPIService.isResponseGood(res)) {
          this.handleSuccess();
        } else {
          this.handleError();
        }
      });
    } else {
      this.sendEmpty = true;
    }
  }

  handleSuccess() {
    this.sendButtonMessage = 'Sent👍';
    setTimeout(() => {
      this.modal.close();
      this.sendEmpty = false;
      this.sendButtonMessage = 'Send';
    }, 900);
  }

  handleError() {
    this.sendButtonMessage = 'SMTP Error👎';
  }
}
