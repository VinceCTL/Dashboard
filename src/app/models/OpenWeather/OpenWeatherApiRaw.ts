
export interface CoordRaw {
  long: number;
  lat: number;
}

export interface WeatherRaw {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainRaw {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface WindRaw {
  speed: number;
  deg: number;
}

export interface SysWeatherRaw {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface OpenWeatherApiRaw {
  coordonnées: CoordRaw;
  weather: WeatherRaw;
  base: string;
  main: MainRaw;
  visibility: number;
  wind: WindRaw;
  clouds: number;
  dt: number;
  sys: SysWeatherRaw;
  id: number;
  name: string;
  timeZone: number;
}
