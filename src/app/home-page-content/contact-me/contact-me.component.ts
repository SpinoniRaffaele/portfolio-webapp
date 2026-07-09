import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MediaService} from '../../shared/media.service';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.scss'],
    standalone: false
})
export class ContactMeComponent implements OnInit {

  isDesktop = true;

  readonly mailRegEx: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  sendButtonMessage: string = $localize`Send`;

  sendEmpty: boolean;

  formGroup: FormGroup;

  constructor(
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
}
