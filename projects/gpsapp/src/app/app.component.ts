import { Component, OnInit } from '@angular/core';
import { Reminder } from './app-models/reminder.model';
import { Employee, getAccessLevel } from './app-models/employee.model';
import {
  AccessLevel,
  returnAllAccessLevels,
} from './app-models/access-level.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'gpsapp';
  public employeeAccount: Employee;
  public AccessLevels: Array<AccessLevel>;
  public reminders: Array<Reminder> = [];
  constructor() {}

  ngOnInit() {
    this.AccessLevels = returnAllAccessLevels();

    this.reminders.push(
      new Reminder(
        '21323312',
        false,
        'Checkout out of your teller Drawer',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ),
    );
    this.reminders.push(
      new Reminder(
        '312324',
        false,
        'call Susan By the end of the day',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Call',
      ),
    );

    this.employeeAccount = new Employee(
      '234234244',
      'Jeff',
      'Todd',
      'Davis',
      getAccessLevel(this.AccessLevels[1]),
      this.reminders,
    );
    // this.employee.push(
    //   new Reminder(
    //     '21323312',
    //     true,
    //     'Checkout out of your teller Drawer',
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     new CustomerAccount('3284bjh', 'Watson', 'Wataburger'),
    //     'Call',
    //   ),
    // );
  }
}
