import { Component, Input, OnInit } from '@angular/core';
import { TimePointData, weatherImageMapping, windImageMapping, windMSMapping } from 'src/app/shared/meteo-api.datamodel';

@Component({
  selector: 'app-meteo-time-point',
  templateUrl: './meteo-time-point.component.html',
  styleUrls: ['./meteo-time-point.component.scss']
})
export class MeteoTimePointComponent implements OnInit {

  @Input() instantMeteoData: TimePointData = {};

  dateTime: undefined | Date = undefined;

  constructor() { }

  ngOnInit(): void {
    this.computeTimePoint();
  }

  computeTimePoint() {
    const date: Date = new Date();
    if (this.instantMeteoData.timepoint) {
      date.setHours(date.getHours() + this.instantMeteoData.timepoint);
      this.dateTime = date;
    }
  }

  getWeatherImage(): string | undefined {
    if (this.instantMeteoData.weather) {
      return weatherImageMapping.get(this.instantMeteoData.weather);
    }
    return undefined;
  }

  getWindImage(): string | undefined {
    if (this.instantMeteoData.wind10m?.speed) {
      return windImageMapping.get(this.instantMeteoData.wind10m.speed);
    }
    return undefined;
  }

  getWindSpeed() : string | undefined {
    if (this.instantMeteoData.wind10m?.speed) {
      return windMSMapping.get(this.instantMeteoData.wind10m.speed);
    }
    return undefined;
  }

}
