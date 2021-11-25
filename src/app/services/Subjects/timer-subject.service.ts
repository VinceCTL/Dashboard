import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TimerSubjectService {
  private subject = new BehaviorSubject<boolean>(false);

  public sendTimeOut(itsTime: boolean) {
    this.subject.next(itsTime);
  }

  public getTimeOut(): BehaviorSubject<boolean> {
    return this.subject;
  }
}
