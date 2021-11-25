import {ImageInfoModel} from './imageInfo.model';

export interface GalleryModelRaw {
  id: string;
  title: string;
  cover: string;
  account_id: string;
  account_url: string;
  views: number;
  comment: number;
  favorite: boolean;
  vote: string;
  images: ImageInfoModel[];
  link: string;
  description: string;
}

export interface GalleryModelDto {
  id: string;
  title: string;
  cover: string;
  account_id: string;
  account_url: string;
  favorite: boolean;
  vote: string;
  images: ImageInfoModel[];
  link: string;
  description: string;
}
