import {Component, Input, OnInit} from '@angular/core';
import {WeatherSubject} from '../../../services/Subjects/weather-subject.service';
import {FilterSubjectService} from '../../../models/filter-subject.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() serviceNeeded: string;
  searchInput: string;

  constructor(private weatherService: WeatherSubject,
              private filterService: FilterSubjectService) { }

  ngOnInit(): void {
    this.searchInput = '';
  }

  public sendCity() {
    if (!!this.searchInput)
      this.filterService.sendData(this.searchInput, this.serviceNeeded);
  }


}
