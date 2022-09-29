import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from 'src/app/shared/loader.service';
import { MailAPIService } from 'src/app/shared/mail-api.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  readonly mailRegEx: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  private modal: any;

  sendButtonMessage: string = 'Send';

  sendEmpty: boolean;

  formGroup: FormGroup;

  constructor(
    private modalService: NgbModal, 
    private mailAPIService: MailAPIService, 
    private formBuilder: FormBuilder,
    public loaderService: LoaderService) {
      this.formGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.pattern(this.mailRegEx)]),
        body: new FormControl('', [Validators.required])
      });
      this.sendEmpty = false;
    }

  openDialog(content: TemplateRef<any>) {
    this.modal = this.modalService.open(content);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.loaderService.setLoading(true);
      this.sendButtonMessage = 'Sending...';
      this.mailAPIService.sendMail(this.formGroup.controls['email'].value, this.formGroup.controls['body'].value)
      .subscribe(res => {
        this.loaderService.setLoading(false);
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
