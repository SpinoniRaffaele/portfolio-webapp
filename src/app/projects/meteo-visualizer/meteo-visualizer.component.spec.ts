import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from '../../shared/media.service';
import { MeteoApiService } from '../../shared/meteo-api.service';

import { MeteoVisualizerComponent } from './meteo-visualizer.component';

describe('MeteoVisualizerComponent', () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
  };
  (window as any).navigator.geolocation = mockGeolocation;
  let component: MeteoVisualizerComponent;
  let fixture: ComponentFixture<MeteoVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoVisualizerComponent ],
      providers: [MeteoApiService, HttpClient, HttpHandler, MediaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask for current position', () => {
    jest.spyOn(window.navigator.geolocation, 'getCurrentPosition');
    component.ngOnInit();
    expect(window.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });

  it('should initialize the meteo API', () => {
    jest.spyOn(component.meteoApiService, 'requestMeteoClientData');
    component.initializeMeteo({coords: {longitude: 1, latitude: 2}});
    expect(component.meteoApiService.requestMeteoClientData).toHaveBeenCalled();
    expect(component.loading).toEqual(true);
  });

  it('should call the meteo API on refresh', () => {
    jest.spyOn(component.meteoApiService, 'requestMeteoClientData');
    component.loading = false;
    component.refresh();
    expect(component.meteoApiService.requestMeteoClientData).toHaveBeenCalled();
    expect(component.loading).toEqual(true);
  });

  it('should not call the meteo API on refresh if another call is ongoing', () => {
    jest.spyOn(component.meteoApiService, 'requestMeteoClientData');
    component.loading = true;
    component.refresh();
    expect(component.meteoApiService.requestMeteoClientData).not.toHaveBeenCalled();
  });
});
