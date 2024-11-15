import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion'
})
export class TemperatureConversionPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === undefined) {
      return '';
    }
    // Convert Kelvin to Celsius
    const celsius = value - 273.15;
    return celsius.toFixed(1) + '°C';
  }
}
