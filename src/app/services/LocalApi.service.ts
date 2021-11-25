import {Injectable} from '@angular/core';
import {WeatherService} from './controller/weather.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ImgurService} from './controller/Imgur.service';
import {GalleryModelDto, GalleryModelRaw} from '../models/Imgur/galleryModelRaw';
import {GalleryListModel} from '../models/Imgur/galleryList.model';
import {StrainService} from "./controller/Strain.service";
import {
  StrainApiByName,
  StrainApiEffects,
  StrainByName,
  StrainByNameDto,
  StrainsApi
} from "../models/Strain/strainsApiEffects";


@Injectable({
  providedIn: 'root',
})
export class LocalApiService {
  public constructor(private weatherApi: WeatherService,
                     private imgurService: ImgurService,
                     private steamService: StrainService) {
  }

  public getDataWeather(city: string): Observable<any> {

    return this.weatherApi.getData(city);
  }

  public getImgurGallerySearch(searchKey: string): Observable<GalleryModelDto[]> {

    const galleryModelList: GalleryModelDto[] = [];
    return this.imgurService.getData(searchKey).pipe(
      map((gallery: GalleryListModel) => {
        console.log('testRaw', gallery);
        gallery.data.forEach((g: GalleryModelRaw) => {
          galleryModelList.push({
            id: g.id,
            images: g.images,
            account_id: g.account_id,
            account_url: g.account_url,
            favorite: g.favorite,
            description: g.description,
            title: g.title,
            cover: g.cover,
            vote: g.vote,
            link: g.link,
          });
        });
        return galleryModelList;
      })
    );
  }

  public getStrainsEffects(): Observable<StrainApiEffects[]> {
    const strainsList: StrainApiEffects[] = [];
    return this.steamService.getEffectsList().pipe(
      map((value: StrainsApi, index) => {
        // @ts-ignore
        for (const v of value) {
          strainsList.push({
            type: v.type,
            effect: v.effect,
          });
        }
        console.log('strainlist', strainsList);
        return strainsList;
      })
    );
  }

  public getStrainsByNameAll(): Observable<StrainByNameDto[]> {
    let strainList: StrainApiByName = {};
    let strainDictionnary: StrainByNameDto[] = [];
    return this.steamService.getStrainsByNameAll().pipe(
      map((strains: StrainApiByName) => {
        console.log(strains);
        for (let key in strains) {
          strainDictionnary.push({
            name: key,
            id: strains[key]['id'],
            race: strains[key]['race'],
            flavors: strains[key]['flavors'],
            effects: strains[key]['effects'],
          });
          // console.log('test', strains);
        }
        return strainDictionnary;
      })
    );
  }

}
