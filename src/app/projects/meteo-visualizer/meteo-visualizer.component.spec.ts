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
});
