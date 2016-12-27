import { Component } from '@angular/core';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 weatherApp will be here soon! :)';
}
