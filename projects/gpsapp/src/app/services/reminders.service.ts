import { Injectable } from '@angular/core';
import { Reminder } from '../app-models/reminder.model';
import { CustomerAccountService } from './customer-account.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RemindersService {
  reminders: Array<Reminder>;
  url = 'http://localhost:3000/employees/';
  constructor(
    public customerAccountService: CustomerAccountService,
    private http: HttpClient,
  ) {}

  // Our component will use this function to get the flavors
  getEmpoyeeReminders(employeeId: number): Observable<Array<Reminder>> {
    return this.http
      .get<Array<Reminder>>(this.url + employeeId + '?_embed=reminders')
      .pipe(map(reminders => (this.reminders = reminders)));
  }
}
