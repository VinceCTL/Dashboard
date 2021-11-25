import {ComponentEnum} from '../Enum/Component.enum';

export interface TabViewModel {
  header: string;
  selected: boolean;
  disabled: boolean;
  closable: boolean;
  closed: boolean;
  selectedService: ComponentEnum;
}
