import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

    getWeatherData(cityName: string): Observable<WeatherData> {
      const apiUrl = environment.weatherApiBaseUrl.replace('%3CREQUIRED%3E', encodeURIComponent(cityName));
    
      return this.http.get<WeatherData>(apiUrl, {
        headers: new HttpHeaders()
          .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
          .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
        // Add other parameters if needed
      });
    }
    
  
}
