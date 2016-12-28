import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item/weather-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ProfileService, WeatherService]
})
export class SidebarComponent implements OnInit {
  profiles: Profile[];

  constructor(private _profileService: ProfileService, private _weatherService: WeatherService) { }

  onSaveNew() {
    const cities = this._weatherService.getWeatherItems().map(function (element: WeatherItem) {
      return element.cityName;
    })
    this._profileService.saveNewProfile(cities);
  }
  ngOnInit() {
    this.profiles = this._profileService.getProfiles();
  }

}
