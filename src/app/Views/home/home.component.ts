import {Component, OnInit} from '@angular/core';
import {TabViewModel} from '../../models/tabPanel/tabView.Model';
import {MenuItem} from 'primeng/api';
import {ComponentEnum} from '../../models/Enum/Component.enum';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabList: TabViewModel[] = [{
    header: 'tabTest',
    selected: true,
    disabled: false,
    closable: true,
    closed: false,
    selectedService: null,
  }];

  enumList = Object.keys(ComponentEnum);
  overlayIsOpen = false;
  enumSelected: ComponentEnum;
  enumSelectedList: ComponentEnum[] = [];
  itemMenu: MenuItem[];
  tabIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.itemMenu = [{
      label: 'Widget',
      visible: true,
      icon: 'pi-pi card',
      command: event => console.log('clickTaB'),
    }];
    console.log('teeest', this.enumList);
  }

  public toogleIsOpen(): Observable<boolean> {
    return of (this.overlayIsOpen = !this.overlayIsOpen);
  }

  public onClickTabPlus(tabIndex: number, event, element): void {
    console.log('pluuus ' + tabIndex);
    this.tabIndex = tabIndex;

    if (tabIndex + 1 === this.tabList.length) {
      this.toogleIsOpen().subscribe(e => {
        // element.hide(event);
        element.show(event);
      });
    }
  }

  public onSelectedService(enumSelected: string, select, event): void {
    console.log('select' + enumSelected);
    this.enumSelected = enumSelected as ComponentEnum;
    this.enumSelectedList.push(this.enumSelected);
    this.tabList.push({
      header: 'tabTest ',
      selected: true,
      disabled: false,
      closable: true,
      closed: false,
      selectedService: this.enumSelectedList[this.tabIndex],
    });
    this.toogleIsOpen().subscribe(e => {
      select.hide(event);
    });
  }

}
