import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../shared/media.service';
import { TimePointData } from '../../shared/meteo-api.datamodel';
import { MeteoApiService } from '../../shared/meteo-api.service';

@Component({
  selector: 'app-meteo-visualizer',
  templateUrl: './meteo-visualizer.component.html',
  styleUrls: ['./meteo-visualizer.component.scss']
})
export class MeteoVisualizerComponent implements OnInit {

  meteoState: TimePointData[] = [];

  loading = false;

  isDesktop = false;

  latitude: number = 0;

  longitude: number = 0;

  validPosition: boolean = false;

  constructor(public meteoApiService: MeteoApiService, private mediaService: MediaService) {
    this.mediaService.isDesktop$.subscribe(value => this.isDesktop = value);
  }

  ngOnInit(): void {
    const location = window.navigator.geolocation;
    location.getCurrentPosition((position) => {
      this.initializeMeteo(position);
    });
  }

  initializeMeteo(pos: any) {
    this.latitude = pos.coords.latitude;
    this.longitude = pos.coords.longitude;
    this.validPosition = true;
    this.loading = true;
    this.meteoApiService.requestMeteoClientData(this.latitude, this.longitude);
    this.meteoApiService.meteoState.subscribe(state => {
      this.meteoState = state;
      this.loading = false;
    });
  }

  refresh(): void {
    if (!this.loading) {
      this.loading = true;
      this.meteoApiService.requestMeteoClientData(this.latitude, this.longitude);
    }
  }
}
