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

  onSubmit() {
    
          const newItem = new WeatherItem(this.data.name, this.data.weather[0].main, this.data.main.temp);
          this._weatherService.addWeatherItem(newItem);
       
  }

  onSearchLocation(value: string) {
    this.searchStream
      .next(value);
  }
  ngOnInit():any {
    this.searchStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this._weatherService.searchWeatherData(term))
      .subscribe(
        data => this.data = data
      );

    
  }

}
