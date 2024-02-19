import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePointData, weatherImageMapping, windImageMapping, windMSMapping } from '../../../shared/meteo-api.datamodel';
import { PrecipitationAmountPipe } from '../precipitation-amount.pipe';

import { MeteoTimePointComponent } from './meteo-time-point.component';

describe('MeteoTimePointComponent', () => {
  let component: MeteoTimePointComponent;
  let fixture: ComponentFixture<MeteoTimePointComponent>;
  let mockTimepoint: TimePointData = {
    timepoint: 3,
    weather: 'clearday',
    prec_amount: 2,
    wind10m: {
      direction: 'E',
      speed: 2
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoTimePointComponent, PrecipitationAmountPipe]

    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoTimePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute the correct time', () => {
    component.instantMeteoData = mockTimepoint;
    component.ngOnInit();
    expect(component.dateTime?.getHours()).toEqual(new Date().getHours() + 3 );
  });

  it('should correctly map weather to images', () => {
    component.instantMeteoData = mockTimepoint;
    const actual = component.getWeatherImage();
    expect(actual).toEqual(weatherImageMapping.get('clearday'));
  });

  it('should correctly map wind speed to images', () => {
    component.instantMeteoData = mockTimepoint;
    const actual = component.getWindImage();
    expect(actual).toEqual(windImageMapping.get(2));
  });

  it('should correctly map wind speed to m/s', () => {
    component.instantMeteoData = mockTimepoint;
    const actual = component.getWindSpeed();
    expect(actual).toEqual(windMSMapping.get(2));
  });
});
