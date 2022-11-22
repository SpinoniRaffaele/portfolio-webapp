import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrecipitationAmountPipe } from '../precipitation-amount.pipe';

import { MeteoTimePointComponent } from './meteo-time-point.component';

describe('MeteoTimePointComponent', () => {
  let component: MeteoTimePointComponent;
  let fixture: ComponentFixture<MeteoTimePointComponent>;

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
});
