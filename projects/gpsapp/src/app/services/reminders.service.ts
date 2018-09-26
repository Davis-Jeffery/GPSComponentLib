import { Injectable } from '@angular/core';
import { Reminder } from '../app-models/reminder.model';
import { CustomerAccountService } from './customer-account.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CustomerAccount } from '../app-models/customer-account.model';

@Injectable()
export class RemindersService {
  reminders: Array<Reminder> = [];
  url = 'http://localhost:3000/';
  constructor(
    public customerAccountService: CustomerAccountService,
    private http: HttpClient,
  ) {}

  // Our component will use this function to get the flavors
  getAllEmpoyeeReminders(employeeId: number): Observable<Array<Reminder>> {
    return this.http
      .get<Array<Reminder>>(this.url + 'employees/' + employeeId + '/reminders')
      .pipe(map(reminders => reminders));
  }

  getAttachedCustomerForReminder(reminderId): Observable<CustomerAccount> {
    return this.http
      .get<CustomerAccount>(
        this.url + 'reminders/' + reminderId + '/customerAccounts',
      )
      .pipe(map(account => account));
  }
}
