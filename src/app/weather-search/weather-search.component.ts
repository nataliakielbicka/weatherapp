import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  
  constructor() { }
  onSubmit(form: FormGroup) {
    console.log(form);
  }
  ngOnInit() {
  }

}
