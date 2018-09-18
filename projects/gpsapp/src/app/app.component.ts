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
import { customerAccount } from './app-models/customer-account.model';
import { loanAccount } from './app-models/loan-account.model';
import { address } from './app-models/address.model';
import { accountStatus } from './app-models/account-status.model';
import { DialogService } from '../../../gps-components/src/lib/dialog/dialog.service';
import { ExampleComponent } from './example/example.component';
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
  public account: customerAccount;
  public addresses: Array<address> = [];
  public loanAccounts: Array<loanAccount> = [];
  public goodAccountStatus: accountStatus = accountStatus.GOOD;
  public bankruptAccountStatus: accountStatus = accountStatus.BANKRUPT;
  public delinquentAccountStatus: accountStatus = accountStatus.DELINQUENT;
  public writtenOffAccountStatus: accountStatus = accountStatus.WRITTEN_OFF;
  public chargedOffAccountStatus: accountStatus = accountStatus.CHARGED_OFF;
  public assignments: Array<Assignment> = [];
  public activeApp: string;
  constructor(public dialog: DialogService) {}

  ngOnInit() {
    this.loanAccounts.push(
      new loanAccount(
        '8943kfj',
        '2017 Chevrolet Tahoe',
        'Auto',
        12000,
        '4.5%',
        '12/12',
        this.goodAccountStatus,
      ),
    );
    this.addresses.push(new address('1080 E 700 N', 'Provo', 'Utah', '84660'));
    this.addresses.push(
      new address('1600 E 700 N', 'New York', 'New York', '90210'),
    );
    this.account = new customerAccount(
      'John',
      'Does',
      '999-99-9999',
      this.addresses,
      'timmy',
      undefined,
      this.loanAccounts,
      undefined,
    );

    this.reminders.push(
      new Reminder(
        '21323312',
        false,
        'Do Something',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        this.account,
        undefined,
        '9:00 AM - 5:00 PM',
      ),
    );

    this.reminders.push(
      new Reminder(
        '21323312',
        false,
        'Do Something',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        this.account,
        undefined,
        '9:00 AM - 5:00 PM',
      ),
    );

    this.reminders.push(
      new Reminder(
        '21323312',
        false,
        'Do Something',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        this.account,
        undefined,
        '9:00 AM - 5:00 PM',
      ),
    );

    this.assignments.push(
      new Assignment(
        '312324',
        false,
        'Do Something else',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        this.account,
        undefined,
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
  ngAfterContentChecked() {
    this.activeApp = 'Home';
  }

  // openDialog() {
  //   const ref = this.dialog.open(ExampleComponent, {
  //     data: { message: 'I am a dynamic component inside of a dialog!' },
  //   });
  //   ref.afterClosed.subscribe(result => {
  //     console.log('Dialog closed', result);
  //   });
  // }

  goToApp(app) {
    this.activeApp = app;
  }

  getFullname() {
    return this.employeeAccount.firstName + ' ' + this.employeeAccount.lastName;
  }
}
