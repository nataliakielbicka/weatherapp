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
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&APPID=55aacf12c2335b3c19ff77f231f68bab&units=metric')
    //For temperature in Celsius use units=metric, its not required
    .map(response => response.json())
    .catch(error => {
      console.error(error);
      return Observable.throw(error.json().error);
    })
  }
  

}