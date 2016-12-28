import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item/weather-item';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers: [WeatherService]
})
export class WeatherSearchComponent implements OnInit {

  private searchStream = new Subject<string>();
  data: any = {};
  
  constructor(private _weatherService: WeatherService) { }

  onSubmit(form: FormGroup) {
    
          const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
          this._weatherService.addWeatherItem(weatherItem);
       
  }

  onSearchLocation(cityName: string) {
    this.searchStream
      .next(cityName);
  }
  ngOnInit() {
    this.searchStream
      .debounceTime(300)
      //.distinctUntilChanged()
      .switchMap((input: string) => this._weatherService.searchWeatherData(input))
      .subscribe(
        data => this.data = data
      );

    
  }

}
