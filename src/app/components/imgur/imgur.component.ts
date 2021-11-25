import {Component, OnInit} from '@angular/core';
import {GalleryModelDto} from '../../models/Imgur/galleryModelRaw';
import {LocalApiService} from '../../services/LocalApi.service';
import {FilterSubjectService} from '../../models/filter-subject.service';
import {TimerSubjectService} from '../../services/Subjects/timer-subject.service';
import {ImageInfoModel} from "../../models/Imgur/imageInfo.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {

  constructor(private apiService: LocalApiService,
              private filterService: FilterSubjectService,
              private timerService: TimerSubjectService,
              private sanitizer: DomSanitizer) { }

  myGalleryData: GalleryModelDto[] = [];
  currentSearchKey = 'cats';
  imageList: ImageInfoModel[] = [];

  ngOnInit(): void {
    this.getDataGallery(this.currentSearchKey);

    this.filterService.getData().subscribe((rep: {searchKey: string, currentService: string}) => {
      if (rep.currentService === 'imgur') {
        this.currentSearchKey = rep.searchKey;
      }
      this.getDataGallery(rep.searchKey);
    });
    this.timerService.getTimeOut().subscribe((itsTime: boolean) => {
      this.getDataGallery(this.currentSearchKey);
    });
  }

  public getDataGallery(searchKey: string): void {
    this.myGalleryData = [];
    this.apiService.getImgurGallerySearch(searchKey).subscribe((event: GalleryModelDto[]) => {

      event.map((rep: GalleryModelDto) => {
        this.myGalleryData.push({
          link: rep.link,
          images: rep.images,
          account_id: rep.account_id,
          account_url: rep.account_url,
          favorite: rep.favorite,
          cover: rep.cover,
          description: rep.description,
          id: rep.id,
          title: rep.title,
          vote: rep.vote
        });
        // if (rep.images) {
        //   // console.log(rep);
        //   this.myGalleryData[index].images = rep.images;
        //   let image = document.createElement('img');
        //   image.src = rep.images[0].link;
        //   document.body.appendChild(image);
        // }
      });
      console.log('after', this.myGalleryData, this.currentSearchKey);
    });
  }

  public getDataImage(imageUrl: string): any {
    let image: any;
    // console.log(this.sanitizer.bypassSecurityTrustHtml(imageUrl));
  }

}
