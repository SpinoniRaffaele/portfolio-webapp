import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set correctly the loading state to true', () => {
    service.setLoading(true);
    expect(service.getLoading()).toBe(true);
    expect(service.isFirstLoading()).toBe(true);
  });

  it('should set correctly the loading state to false', () => {
    service.setLoading(false);
    expect(service.getLoading()).toBe(false);
    expect(service.isFirstLoading()).toBe(false);
  });
});
