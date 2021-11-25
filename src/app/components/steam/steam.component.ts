import { Component, OnInit } from '@angular/core';
import {LocalApiService} from '../../services/LocalApi.service';
import {map} from "rxjs/operators";
import {StrainApiByName, StrainByName, StrainByNameDto, StrainsApi} from "../../models/Strain/strainsApiEffects";

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css']
})
export class SteamComponent implements OnInit {

  constructor(private localApiService: LocalApiService) {
  }

  inputSearch: string;
  myOgList: StrainByNameDto[] = [];
  myOgListCpy: StrainByNameDto[] = [];
  myOgListName: string[] = [];
  myOgListFiltered: string[] = [];

  ngOnInit(): void {
    this.localApiService.getStrainsEffects().subscribe((rep) => {
    });

    this.localApiService.getStrainsByNameAll().subscribe((rep: StrainByNameDto[]) => {
      console.log(rep);
      this.myOgList = rep;
      this.myOgListCpy = this.myOgList.map(value => {
        return value = {
          name: value.name.toLocaleLowerCase(),
          flavors: value.flavors,
          race: value.race,
          effects: value.effects,
          id: value.id,
        };
      });
    });
  }

  public getSearchStrainsByName(): void {
    if (!this.inputSearch) {
      this.myOgListCpy = this.myOgList;
      return;
    }
    this.myOgListCpy = this.myOgList.filter(strain => {
      return strain['name'].toLocaleLowerCase().includes(this.inputSearch.toLocaleLowerCase());
    });
  }

  // public getKush(name: string) {
  //   for (let kush in this.myOgList) {
  //     console.log('kush' + kush);
  //     this.myOgList[kush].filter(og => {
  //     });
  //   }
  // }
}
