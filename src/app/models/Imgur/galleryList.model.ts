import {GalleryModelRaw} from './galleryModelRaw';

export interface GalleryListModel {
  data: GalleryModelRaw[];
  status: number;
  succes: boolean;
}
