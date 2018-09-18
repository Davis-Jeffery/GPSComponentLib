import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material';
// import { Reminder } from './reminders/reminders.component';

@Component({
  selector: 'gps-app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppMainNavComponent implements OnInit {
  @Input()
  background = 'primary';
  @Input()
  institutionName = 'Institution Name';
  @Input()
  reminders: Array<any>;
  @Input()
  assignments: Array<any>;
  @Input()
  appsSidebar: MatDrawer;

  constructor() {}

  ngOnInit() {
    console.log(this.assignments);
  }

  toggleAppsSidebar() {
    this.appsSidebar.toggle();
  }
}
