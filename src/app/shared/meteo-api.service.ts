import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MeteoApiData, TimePointData } from './meteo-api.datamodel';

@Injectable({
  providedIn: 'root'
})
export class MeteoApiService {

  private readonly BASE_PATH = 'https://www.7timer.info/bin/api.pl';

  private readonly DEFAULT_LATITUDE = 23;

  private readonly DEFAULT_LONGITUDE = 113;

  private readonly PRODUCT = 'civil';

  private readonly OUTPUT_TYPE = 'json';

  public meteoState: Subject<TimePointData[]> = new Subject();

  constructor(private http: HttpClient) {
  }

  requestMeteoClientData(latitude: number, longitude: number) {
    let queryParams: HttpParams = new HttpParams();
    queryParams = queryParams.append('lon', latitude ? latitude : this.DEFAULT_LONGITUDE.toString());
    queryParams = queryParams.append('lat', longitude ? longitude : this.DEFAULT_LATITUDE.toString());
    queryParams = queryParams.append('product', this.PRODUCT.toString());
    queryParams = queryParams.append('output', this.OUTPUT_TYPE.toString());

    this.http.get(this.BASE_PATH, { params: queryParams }).subscribe((answer) => {
      const answerCasted: MeteoApiData = answer as MeteoApiData
      if (answerCasted.dataseries) {
        this.meteoState.next(answerCasted.dataseries);
      } else {
        this.meteoState.next([]);
      }
    });
  }
}
