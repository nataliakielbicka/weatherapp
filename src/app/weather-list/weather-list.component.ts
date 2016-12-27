import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherItem } from '../weather-item/weather-item';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];
  constructor(private _weatherService: WeatherService) { }

  ngOnInit():any {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
