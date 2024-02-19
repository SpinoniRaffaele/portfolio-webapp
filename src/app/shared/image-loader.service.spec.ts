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

  it('should load actual resource if localStorage does not contain it', () => {
    const result = service.loadImage('path');
    expect(result).toBe('path');
  });
});
