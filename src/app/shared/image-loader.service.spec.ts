import { TestBed } from '@angular/core/testing';

import { ImageLoaderService } from './image-loader.service';

describe('ImageLoaderService', () => {
  let service: ImageLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.preloadedImagesList).toBeTruthy();
  });

  it('should check in local sotorage before loading', () => {
    spyOn(localStorage, 'getItem').and.returnValue('ok');
    const result = service.loadImage('path');
    expect(result).toBe('ok');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('should load actual resource if localStorage does not contain it', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const result = service.loadImage('path');
    expect(result).toBe('path');
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
