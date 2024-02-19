import { HttpClient, HttpHandler } from '@angular/common/http';
import { EmbeddedViewRef, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { MailAPIService } from '../../shared/mail-api.service';
import { MediaService } from '../../shared/media.service';

import { ContactMeComponent } from './contact-me.component';

describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;
  let mockModal = {open: jest.fn()}
  let mockMailApi = {sendMail: jest.fn(), isResponseGood: jest.fn()};
  jest.spyOn(mockModal, 'open');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMeComponent ],
      providers: [ 
        {provide: MailAPIService, useValue: mockMailApi},
        {provide: NgbModal, useValue: mockModal}, 
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
    expect(mockModal.open).toHaveBeenCalled();
  });

  it('should call mailAPI onSubmit if form is valid', () => {
    const validMail: string = 'valid@gmail.com';
    const validBody: string = 'Valid';
    jest.spyOn(mockMailApi, 'sendMail').mockReturnValue(new Observable());
    component.formGroup.get('email')?.patchValue(validMail);
    component.formGroup.get('body')?.patchValue(validBody);
    component.onSubmit();
    expect(mockMailApi.sendMail).toHaveBeenCalledWith(validMail, validBody);
  });

  it('should correctly handle mail sending success', () => {
    const validMail: string = 'valid@gmail.com';
    const validBody: string = 'Valid';
    component.formGroup.get('email')?.patchValue(validMail);
    component.formGroup.get('body')?.patchValue(validBody);
    const response = new Subject();
    const response$ = response.asObservable();
    jest.spyOn(mockMailApi, 'sendMail').mockReturnValue(response$);
    jest.spyOn(mockMailApi, 'isResponseGood').mockReturnValue(true);
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
    jest.spyOn(mockMailApi, 'sendMail').mockReturnValue(response$);
    jest.spyOn(mockMailApi, 'isResponseGood').mockReturnValue(false);
    component.onSubmit();
    response.next('');
    expect(component.sendButtonMessage).toEqual('SMTP Error👎');
  });
});
