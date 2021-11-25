import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StrainApiByName} from "../../models/Strain/strainsApiEffects";

@Injectable({
  providedIn: 'root'
})

export class StrainService {
  constructor(private httpClient: HttpClient) {
  }

  private apiKey = 'mBCF8RA';
  private urlGameList = 'http://strainapi.evanbusse.com/' + this.apiKey;

  public getEffectsList(): Observable<any> {
    return this.httpClient.get(
      `${this.urlGameList}` + '/searchdata/effects',
      {withCredentials: false, headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:4200/',
        }},
    );
  }

  public getStrainsByNameAll(): Observable<any> {
    return this.httpClient.get(
      `${this.urlGameList}` + '/strains/search/all',
      {withCredentials: false, headers: {
          'Access-Control-Allow-Origin' : 'http://localhost:4200/',
        }},
    );
  }

}
