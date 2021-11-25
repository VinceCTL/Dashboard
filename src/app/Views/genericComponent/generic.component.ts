import {Component, Input, OnInit} from '@angular/core';
import {ComponentEnum} from '../../models/Enum/Component.enum';


@Component({
  selector: 'app-generic-component',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  @Input() componentEnum: ComponentEnum;

  constructor() { }

  ngOnInit(): void {
    if (!!this.componentEnum) {
      console.log('genericComponent', this.componentEnum);
    } else {
      this.componentEnum = null;
    }

  }

}
