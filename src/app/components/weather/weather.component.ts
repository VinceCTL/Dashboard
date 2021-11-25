import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OpenWeatherApiRaw} from '../../models/OpenWeather/OpenWeatherApiRaw';
import {LocalApiService} from '../../services/LocalApi.service';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import {faCloud} from '@fortawesome/free-solid-svg-icons';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {WeatherSubject} from '../../services/Subjects/weather-subject.service';
import {TimerSubjectService} from '../../services/Subjects/timer-subject.service';
import {FilterSubjectService} from '../../models/filter-subject.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData: OpenWeatherApiRaw;
  temperature = 0;
  tempMin = 0;
  tempMax = 0;
  ressenti = 0;
  name = '';
  currendDate = new Date();
  isDay = false;
  faSun = faSun;
  faCloud = faCloud;
  faMoon = faMoon;
  citySelected = 'Marseille';

  constructor(private apiService: LocalApiService,
              private filterService: FilterSubjectService,
              private timerService: TimerSubjectService) { }

  ngOnInit(): void {

    this.getDatas(this.citySelected);

    this.filterService.getData().subscribe((rep: {searchKey: string, currentService: string}) => {
      if (rep.currentService === 'weather')
        this.getCity(rep.searchKey);
    });
    this.timerService.getTimeOut().subscribe((itsTime: boolean) => {
      this.getDatas(this.citySelected);
    });
  }

  public parseData = (data: OpenWeatherApiRaw) => {
    if (!!data) {
      this.weatherData = data;
      this.temperature = data.main.temp;
      this.tempMax = data.main.temp_max;
      this.tempMin = data.main.temp_min;
      this.ressenti = data.main.feels_like;
      this.name = data.name;
      this.isDay = this.currendDate.getTime() < (this.weatherData.sys.sunset * 1000);
    }
  }

  public getDatas(city: string) {
    this.apiService.getDataWeather(city).subscribe((rep: OpenWeatherApiRaw) => {
      console.log(rep);
      this.parseData(rep);
    });
  }

  public getCity = (city: string) => {
    console.log('ooooo l\'inculer, un mec de: ', city);
    this.citySelected = city;
    this.getDatas(city);
  }

}
