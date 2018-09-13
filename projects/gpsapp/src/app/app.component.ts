import { Component, OnInit } from '@angular/core';
import { Reminder } from './app-models/reminder.model';
import { Employee } from './app-models/employee.model';
import {
  AccessLevel,
  returnAllAccessLevels,
  getGlobalProductsByAccessLevel,
  getAdminProductsByAccessLevel,
} from './app-models/access-level.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'gpsapp';
  public employeeAccount: Employee;
  public adminAccess: AccessLevel = AccessLevel.ADMIN;
  public tellerAccess: AccessLevel = AccessLevel.TELLER_AGENT;
  public collectionsAccess: AccessLevel = AccessLevel.COLLECTIONS_AGENT;
  public reminders: Array<Reminder> = [];
  constructor() {}

  ngOnInit() {
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
      this.adminAccess,
      getGlobalProductsByAccessLevel(this.adminAccess),
      getAdminProductsByAccessLevel(this.adminAccess),
      this.reminders,
    );
  }
}
