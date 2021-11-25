import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FilterSubjectService {
  private subject = new Subject <{ searchKey: string, currentService: string }>();

  public sendData(stringToSend: string, service: string): void {
    this.subject.next({searchKey: stringToSend, currentService: service});
  }

  public getData(): Observable<{ searchKey: string, currentService: string }> {
    return this.subject.asObservable();
  }
}
