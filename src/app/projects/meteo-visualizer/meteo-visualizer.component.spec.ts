import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from 'src/app/shared/media.service';
import { MeteoApiService } from 'src/app/shared/meteo-api.service';

import { MeteoVisualizerComponent } from './meteo-visualizer.component';

describe('MeteoVisualizerComponent', () => {
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
    spyOn(window.navigator.geolocation, 'getCurrentPosition');
    component.ngOnInit();
    expect(window.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });

  it('should initialize the meteo API', () => {
    spyOn(component.meteoApiService, 'requestMeteoClientData');
    component.initializeMeteo({coords: {longitude: 1, latitude: 2}});
    expect(component.meteoApiService.requestMeteoClientData).toHaveBeenCalled();
    expect(component.loading).toEqual(true);
  });

  it('should call the meteo API on refresh', () => {
    spyOn(component.meteoApiService, 'requestMeteoClientData');
    component.loading = false;
    component.refresh();
    expect(component.meteoApiService.requestMeteoClientData).toHaveBeenCalled();
    expect(component.loading).toEqual(true);
  });

  it('should not call the meteo API on refresh if another call is ongoing', () => {
    spyOn(component.meteoApiService, 'requestMeteoClientData');
    component.loading = true;
    component.refresh();
    expect(component.meteoApiService.requestMeteoClientData).not.toHaveBeenCalled();
  });
});
