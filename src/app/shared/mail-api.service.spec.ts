import { TestBed } from '@angular/core/testing';

import { MailAPIService } from './mail-api.service';

describe('MailAPIService', () => {
  let service: MailAPIService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
