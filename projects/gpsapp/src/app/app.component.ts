import { Component, OnInit } from '@angular/core';
import { Reminder } from './app-models/reminder.model';
import { Assignment } from './app-models/assignment.model';

import { Employee, makeFullName } from './app-models/employee.model';
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
  public assignments: Array<Assignment> = [];
  constructor() {}

  ngOnInit() {
    this.reminders.push(
      new Reminder(
        '21323312',
        false,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Checkout Out of Your Teller Drawer',
        undefined,
        '9:00 AM - 5:00 PM',
      ),
    );
    this.reminders.push(
      new Reminder(
        '312324',
        false,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Call',
        'Dwight K Schrute',
        '3:00 PM - 6:00 PM',
      ),
    );

    this.reminders.push(
      new Reminder(
        '312324',
        false,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        'This is a super mega long title for testing purposes',
        'Dwight K Schrute',
        '3:00 PM - 6:00 PM',
      ),
    );

    this.assignments.push(
      new Assignment(
        '312324',
        false,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        'This is a super mega long title for testing purposes',
        'Dwight K Schrute',
        '3:00 PM - 6:00 PM',
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
      this.assignments,
    );
  }

  getFullname() {
    return this.employeeAccount.firstName + ' ' + this.employeeAccount.lastName;
  }
}
