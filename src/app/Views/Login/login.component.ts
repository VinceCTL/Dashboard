import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector : 'loginViewComponent',
  templateUrl: './login.component.html',
  // styleUrls: [ './login.component.scss'],
})

export class LoginViewComponent {

  inputUser: string = null;
  inputPassword: string = null;

  constructor() {
  }

  public getInfos() {
    console.log(this.inputUser, this.inputPassword);
  }

}
