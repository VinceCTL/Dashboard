import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OpenWeatherApiRaw} from '../../models/OpenWeather/OpenWeatherApiRaw';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  ApiKeyWeather = 'c98b50540b6119a762b835c6c0bf6be0';
  private url = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) {
  }

  public getData(city: string): Observable<any> {
    let parameters = new HttpParams();
    parameters = parameters.set('q', city);
    parameters = parameters.set('appid', this.ApiKeyWeather);
    parameters = parameters.set('units', 'metric');
    return this.httpClient.get(
      `${this.url}`,
      {withCredentials: false, params: parameters});
  }
}
