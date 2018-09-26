import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'gps-app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainNavComponent {
  @Input()
  sideBar;
  constructor() {}
}
