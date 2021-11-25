export interface StrainsApi {
  apps: StrainApiEffects[];
}

export interface StrainApiEffects {
  effect: string;
  type: string;
}

export interface StrainEffectsName {
  positive: string[];
  negative: string[];
  medical: string[];
}

export interface StrainApiFlavors {
  flavors: string[];
}

export interface StrainApiByName {
  [name: string]: StrainByName[];
}

export interface StrainByName {
  id: number;
  race: string;
  flavors: string[];
  effects: StrainEffectsName[];
}

export interface StrainByNameDto {
  name: string;
  id: number;
  race: string;
  flavors: string[];
  effects: StrainEffectsName[];
}

