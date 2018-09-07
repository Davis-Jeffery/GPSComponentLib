import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
// import { Reminder } from './reminders/reminders.component';

@Component({
  selector: 'gps-app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppMainNav implements OnInit {
  @Input()
  background: string = 'primary';
  @Input()
  institutionName: string = 'Institution Name';
  @Input()
  reminders: Array<any>;

  constructor() {}

  ngOnInit() {
    console.log(this.reminders);
  }
}
