import { HttpClient, HttpHandler } from '@angular/common/http';
import { EmbeddedViewRef, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { MailAPIService } from 'src/app/shared/mail-api.service';
import { MediaService } from 'src/app/shared/media.service';

import { ContactMeComponent } from './contact-me.component';

describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;
  const modalSpy = jasmine.createSpyObj('NgbModal', ['open']);
  const mailAPISpy = jasmine.createSpyObj('MailAPIService', ['sendMail', 'isResponseGood']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMeComponent ],
      providers: [ 
        {provide: MailAPIService, useValue: mailAPISpy},
        {provide: NgbModal, useValue: modalSpy}, 
        MediaService,
        FormBuilder, 
        HttpClient, 
        HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.sendButtonMessage).toBe('Send');
  });

  it('should validate mail correctly', () => {
    const validMail: string = 'raffaele.something@test.com';
    const invalidMail: string = 'a@.'
    expect(validMail).toMatch(component.mailRegEx);
    expect(invalidMail).not.toMatch(component.mailRegEx);
  });

  it('should have a correct form Object', () => {
    expect(component.formGroup).toBeDefined();
    expect(component.formGroup.get('email')).toBeDefined();
    expect(component.formGroup.get('body')).toBeDefined();
  });

  it('should open modal', () => {
    const fakeTemplateRef = {
      elementRef: {nativeElement: {}},
      createEmbeddedView: function (context: any, injector?: Injector | undefined): EmbeddedViewRef<any> {
        throw new Error('Function not implemented.');
      }
    };
    component.openDialog(fakeTemplateRef);
    expect(modalSpy.open).toHaveBeenCalled();
  });

  it('should call mailAPI onSubmit if form is valid', () => {
    const validMail: string = 'valid@gmail.com';
    const validBody: string = 'Valid';
    component.formGroup.get('email')?.patchValue(validMail);
    component.formGroup.get('body')?.patchValue(validBody);
    mailAPISpy.sendMail.and.returnValue(new Observable());
    component.onSubmit();
    expect(mailAPISpy.sendMail).toHaveBeenCalledWith(validMail, validBody);
  });

  it('should correctly handle mail sending success', () => {
    const validMail: string = 'valid@gmail.com';
    const validBody: string = 'Valid';
    component.formGroup.get('email')?.patchValue(validMail);
    component.formGroup.get('body')?.patchValue(validBody);
    const response = new Subject();
    const response$ = response.asObservable();
    mailAPISpy.sendMail.and.returnValue(response$);
    mailAPISpy.isResponseGood.and.returnValue(true);
    component.onSubmit();
    response.next('');
    expect(component.sendButtonMessage).toEqual('Sent👍');
  });

  it('should correctly handle mail sending failure', () => {
    const validMail: string = 'valid@gmail.com';
    const validBody: string = 'Valid';
    component.formGroup.get('email')?.patchValue(validMail);
    component.formGroup.get('body')?.patchValue(validBody);
    const response = new Subject();
    const response$ = response.asObservable();
    mailAPISpy.sendMail.and.returnValue(response$);
    mailAPISpy.isResponseGood.and.returnValue(false);
    component.onSubmit();
    response.next('');
    expect(component.sendButtonMessage).toEqual('SMTP Error👎');
  });
});
