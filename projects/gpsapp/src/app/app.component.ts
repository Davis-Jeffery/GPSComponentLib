import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Reminder } from './app-models/reminder.model';
import { Assignment } from './app-models/assignment.model';

import { Employee } from './app-models/employee.model';
import {
  getGlobalProductsByAccessLevel,
  getAdminProductsByAccessLevel,
  AccessLevel,
} from './app-models/access-level.model';
import { Observable } from 'rxjs';
import { EmployeeService } from './services/employee.service';
import { Product } from './app-models/product.model';
import { RemindersService } from './services/reminders.service';
import { AssignmentsService } from './services/assignments.service';
import { CustomerAccount } from './app-models/customer-account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'gpsapp';
  public activeApp = 'Home';
  public employee: Employee;
  public reminders: Array<Reminder> = [];
  public assignments: Array<Assignment> = [];
  public fullName: string;
  public accessLevel: AccessLevel;
  public adminProducts: Array<Product>;
  public globalProducts: Array<Product>;
  public customerAccount: CustomerAccount;
  public employeeId: number = 1;
  constructor(
    public employeeService: EmployeeService,
    public remindersService: RemindersService,
    public assignmentsService: AssignmentsService,
  ) {}

  async ngOnInit() {
    this.employeeService
      .getEmployeeAccount(this.employeeId)
      .subscribe(employee => {
        this.assignmentsService
          .getAllEmpoyeeAssignments(this.employeeId)
          .subscribe(assignments => {
            assignments.forEach(x => {
              this.assignments.push(
                new Assignment(
                  x.id,
                  x.isComplete,
                  x.title,
                  x.description,
                  null,
                  x.time,
                ),
              );
            });
          });

        this.remindersService
          .getAllEmpoyeeReminders(this.employeeId)
          .subscribe(reminders => {
            reminders.forEach(reminder => {
              this.remindersService
                .getAttachedCustomerForReminder(reminder.id)
                .subscribe(account => {
                  this.customerAccount = account;
                });
              this.reminders.push(
                new Reminder(
                  reminder.id,
                  reminder.isComplete,
                  reminder.title,
                  reminder.description,
                  this.customerAccount,
                  reminder.time,
                ),
              );
            });
          });
        this.employee = new Employee(
          employee.id,
          employee.firstName,
          employee.middleName,
          employee.lastName,
          employee.accessLevel,
          getGlobalProductsByAccessLevel(employee.accessLevel),
          getAdminProductsByAccessLevel(employee.accessLevel),
          this.reminders,
        );

        this.accessLevel = this.employee.accessLevel;
        this.globalProducts = this.employee.globalProducts;
        this.adminProducts = this.employee.adminProducts;
        this.fullName = this.employee.firstName + ' ' + this.employee.lastName;
      });
  }

  goToApp(app) {
    this.activeApp = app;
  }
}
