import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){

  }

  cityName: string = 'Wellington';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          // Convert temperature from Kelvin to Celsius
          response.main.temp = this.convertKelvinToCelsius(response.main.temp);
          this.weatherData = response;
          console.log(response);
        }
      });
  }
  
  // Method to convert Kelvin to Celsius
  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15; 
  }

}
