import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {GalleryModelRaw} from '../../models/Imgur/galleryModelRaw';
import {map} from 'rxjs/operators';
import {GalleryListModel} from '../../models/Imgur/galleryList.model';

@Injectable({
  providedIn: 'root'
})

export class ImgurService {

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute) {
  }

  clientId = 'b2081d35464c831';
  private url = 'https://api.imgur.com/3/gallery/search/time/all/1';

  public getData(search: string): Observable<GalleryListModel> {
    let parameters = new HttpParams();
    parameters = parameters.set('q', search);
    return this.httpClient.get(
      `${this.url}`,
      {params: parameters, headers: { Authorization: 'Client-ID ' + this.clientId}}
      ).pipe(
        map(event => event as GalleryListModel)
    );
  }

  public getImage(imageUrl: string): any {
    this.httpClient.get(
      imageUrl,
    ).subscribe(data => {
      console.log(data);
      return data;
    });
  }



}
