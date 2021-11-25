import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WeatherSubject {
  private subject = new Subject<any>();

  public sendCity(city: string) {
    this.subject.next(city);
  }

  public getCity(): Observable<string> {
    return this.subject.asObservable();
  }

}
