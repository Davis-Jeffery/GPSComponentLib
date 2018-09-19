<<<<<<< HEAD
import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { MatDrawer } from "@angular/material";
// import { Reminder } from './reminders/reminders.component';
=======
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material';
>>>>>>> origin

@Component({
  selector: "gps-app-main-nav",
  templateUrl: "./app-main-nav.component.html",
  styleUrls: ["./app-main-nav.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppMainNavComponent {
  @Input()
  background = "primary";
  @Input()
  institutionName = "Institution Name";
  @Input()
  reminders: Array<any>;
  @Input()
  assignments: Array<any>;
  @Input()
  appsSidebar: MatDrawer;

  constructor() {}

  toggleAppsSidebar() {
    this.appsSidebar.toggle();
  }
}
