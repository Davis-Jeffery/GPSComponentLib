import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Reminder } from './app-models/reminder.model';
import { Assignment } from './app-models/assignment.model';

import { Employee } from './app-models/employee.model';
import {
  AccessLevel,
  getGlobalProductsByAccessLevel,
  getAdminProductsByAccessLevel,
} from './app-models/access-level.model';
import { Observable } from 'rxjs';
import { EmployeeService } from './services/employee.service';
import { Product } from './app-models/product.model';
import { RemindersService } from './services/reminders.service';
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
  public fullName: string;
  public accessLevel: AccessLevel;
  public adminProducts: Array<Product>;
  public globalProducts: Array<Product>;
  constructor(
    public employeeService: EmployeeService,
    public remindersService: RemindersService,
  ) {}

  async ngOnInit() {
    this.employeeService.getEmployeeAccount(1).subscribe(employee => {
      console.log(employee);
      this.employee = employee;
      this.fullName = this.employeeService.getFullname();
      this.accessLevel = employee.accessLevel;
      this.adminProducts = employee.adminProducts;
      this.globalProducts = employee.globalProducts;
    });

    this.remindersService.getEmpoyeeReminders(1).subscribe(reminders => {
      this.reminders = reminders;
      console.log(reminders);
    });
  }

  goToApp(app) {
    this.activeApp = app;
  }
}
