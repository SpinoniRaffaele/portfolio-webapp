import {HttpClient, HttpHandler} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder} from '@angular/forms';
import {MediaService} from '../../shared/media.service';

import {ContactMeComponent} from './contact-me.component';

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
});
