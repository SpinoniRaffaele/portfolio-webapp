import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

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

  it('should call the API correctly', () => {
    jest.spyOn(service.http, 'get').mockReturnValue(of({dataseries: []}));
    service.requestMeteoClientData(12, 12);
    expect(service.http.get).toHaveBeenCalled();
  });
});
