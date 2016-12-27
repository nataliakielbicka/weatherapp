import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherItem } from '../weather-item/weather-item';
import { WEATHER_ITEMS } from '../weather-item/weather.data';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];
  constructor() { }

  ngOnInit():any {
    this.weatherItems = WEATHER_ITEMS;
  }

}
