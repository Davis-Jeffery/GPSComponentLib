import { Injectable } from '@angular/core';
import { Employee } from '../app-models/employee.model';
import {
  getGlobalProductsByAccessLevel,
  getAdminProductsByAccessLevel,
} from '../app-models/access-level.model';
import { HttpClient } from '@angular/common/http';
import { AccessLevelService } from './access-level.service';
import { RemindersService } from './reminders.service';
import { AssignmentsService } from './assignments.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerAccountService } from './customer-account.service';
import { Reminder } from '../app-models/reminder.model';

@Injectable()
export class EmployeeService {
  url = 'http://localhost:3000/employees/';
  reminders: Array<Reminder>;
  public employee: Employee;

  constructor(
    public accessLevelService: AccessLevelService,
    public remindersService: RemindersService,
    public assignmentService: AssignmentsService,
    public customerAccountservice: CustomerAccountService,
    private http: HttpClient,
  ) {}

  getFullname() {
    return this.employee.firstName + ' ' + this.employee.lastName;
  }

  getEmployeeAccount(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(this.url + id)
      .pipe(
        map(
          employee =>
            (this.employee = new Employee(
              employee.id,
              employee.firstName,
              employee.middleName,
              employee.lastName,
              employee.accessLevel,
              employee.globalProducts,
              employee.adminProducts,
              employee.reminders,
              employee.assignments,
            )),
        ),
      );
  }
}
