import { Component, OnInit } from '@angular/core';
import { Reminder } from './app-models/reminder.model';
import { CustomerAccount } from './app-models/customer-account.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'gpsapp';
  public reminders: Array<Reminder> = [];
  constructor() {}

  ngOnInit() {
    this.reminders.push(
      new Reminder(
        '21323312',
        true,
        'Checkout out of your teller Drawer',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        new CustomerAccount('3284bjh', 'Watson', 'Wataburger'),
        'Call',
      ),
    );

    this.reminders.push(
      new Reminder(
        '43456634',
        false,
        'Go Home',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        new CustomerAccount('234hgd4', 'Rickity', 'Rick'),
      ),
    );
    console.log(this.reminders);
  }
}
