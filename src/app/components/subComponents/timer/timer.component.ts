import { Component, OnInit } from '@angular/core';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {TimerSubjectService} from '../../../services/Subjects/timer-subject.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  faClock = faClock;
  display = false;
  currentInterval = 30;
  intervalSet: number;
  interval;

  constructor(private timerService: TimerSubjectService) { }

  ngOnInit(): void {
    this.setInterval();
    this.intervalSet = this.currentInterval;
  }

  public onClickTimer(): void {
    this.display = !this.display;
  }

  public onValidationInterval(): void {
    this.currentInterval = this.intervalSet;
    this.onClickTimer();
  }

  public setInterval(): void {
    this.interval = setInterval(() => {
      if (this.currentInterval > 0) {
        this.currentInterval--;
      } else {
        this.currentInterval = this.intervalSet;
        this.timerService.sendTimeOut(true);
      }
    }, 1000 );
  }

}
