import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MeteoApiService } from './meteo-api.service';

describe('MeteoApiService', () => {
  let service: MeteoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(MeteoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
