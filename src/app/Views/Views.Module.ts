import {NgModule} from '@angular/core';
import {LoginViewComponent} from './Login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register-component';
import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import {HttpClientModule} from '@angular/common/http';
import {WeatherComponent} from '../components/weather/weather.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FilterComponent} from '../components/subComponents/filter/filter.component';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {TimerComponent} from '../components/subComponents/timer/timer.component';
import {GenericComponent} from './genericComponent/generic.component';
import {ImgurComponent} from '../components/imgur/imgur.component';
import {SteamComponent} from "../components/steam/steam.component";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DataViewModule} from 'primeng/dataview';



@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        ButtonModule,
        BrowserAnimationsModule,
        TabViewModule,
        HttpClientModule,
        FontAwesomeModule,
        InputTextModule,
        TooltipModule,
        DialogModule,
        InputNumberModule,
        AutoCompleteModule,
        DataViewModule,
    ],
  providers: [
    LoginViewComponent,
    RegisterComponent,
    WeatherComponent,
    FilterComponent,
    TimerComponent,
    GenericComponent,
    ImgurComponent,
    SteamComponent,
  ],

  declarations: [
    LoginViewComponent,
    RegisterComponent,
    WeatherComponent,
    FilterComponent,
    TimerComponent,
    GenericComponent,
    ImgurComponent,
    SteamComponent,
  ],

  exports: [
    LoginViewComponent,
    RegisterComponent,
    WeatherComponent,
    FilterComponent,
    TimerComponent,
    GenericComponent,
    ImgurComponent,
    SteamComponent,
  ]
})

export class ViewsModule {
  constructor() {
  }
}
