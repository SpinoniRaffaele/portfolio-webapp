import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MailAPIService } from './mail-api.service';

describe('MailAPIService', () => {
  let service: MailAPIService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(MailAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should whitelist correctly', () => {
    const content = "text with # invalid ? character / =  done.";
    const actual = service.whitelistContent(content);
    expect(actual).toEqual('text with _ invalid _ character _ _  done.');
  });

  it('should send the email with the correct headers', () => {
    jest.spyOn(service.http, 'post');
    const sender = 'sender@mail.com';
    const content = 'thecontentoftheemail';
    service.sendMail(sender, content);
    expect(service.http.post).toHaveBeenCalled();
  });
});
