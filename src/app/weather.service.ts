import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather-item/weather.data';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { WeatherItem } from './weather-item/weather-item';

@Injectable()
export class WeatherService {
  
  constructor(private _http: Http) { 

  }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(item: WeatherItem) {
    WEATHER_ITEMS.push(item);
  }

  clearWeatherItems() {
    WEATHER_ITEMS.splice(0);
  }

  searchWeatherData(city:string): Observable<any> {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&APPID=5ee9cf8676f88dc4864142eda158e972&units=metric')
    //For temperature in Celsius use units=metric, its not required
    .map(response => response.json())
    .catch(error => {
      console.error(error);
      return Observable.throw(error.json().error);
    })
  }
  

}