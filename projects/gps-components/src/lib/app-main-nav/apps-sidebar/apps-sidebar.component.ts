import { Component, Input, ViewChild } from '@angular/core';
export class product {
  constructor(
    public id: string,
    public title: string,
    public link: string,
    public icon: string,
  ) {}
}
@Component({
  selector: 'gps-apps-sidebar',
  templateUrl: './apps-sidebar.component.html',
  styleUrls: ['./apps-sidebar.component.scss'],
})
export class AppsSidebarComponent {
  @ViewChild('icon')
  linkIcon: HTMLElement;
  @Input()
  globalProducts: Array<product>;
  @Input()
  adminProducts: Array<product> = undefined;
  constructor() {}
  @Input()
  employeeName: string;
  @Input()
  employeeRole: string;

  public toPretty(str) {
    var frags = str.split('_');
    for (let i = 0; i < frags.length; i++) {
      frags[i] = frags[i].toLowerCase();
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
}
