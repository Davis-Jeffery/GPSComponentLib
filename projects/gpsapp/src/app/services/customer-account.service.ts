import { Injectable } from '@angular/core';
import { Reminder } from '../app-models/reminder.model';
import { CustomerAccount } from '../app-models/customer-account.model';
import { Address } from '../app-models/address.model';
import { LoanAccount } from '../app-models/loan-account.model';
import { accountStatus } from '../app-models/account-status.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerAccountService {
  public customerAccount: CustomerAccount;
  public addresses: Array<Address> = [];
  public loanAccounts: Array<LoanAccount> = [];
  public goodAccountStatus: accountStatus = accountStatus.GOOD;
  public bankruptAccountStatus: accountStatus = accountStatus.BANKRUPT;
  public delinquentAccountStatus: accountStatus = accountStatus.DELINQUENT;
  public writtenOffAccountStatus: accountStatus = accountStatus.WRITTEN_OFF;
  public chargedOffAccountStatus: accountStatus = accountStatus.CHARGED_OFF;
  url: string = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {}

  // Our component will use this function to get the flavors
  getCustomerAccount(id): Observable<CustomerAccount> {
    return this.http
      .get<CustomerAccount>(this.url)
      .pipe(map(customer => (this.customerAccount = customer)));
  }
  getCustomerAddresses() {
    return this.addresses;
  }
  getCustomerLoanAccounts() {}
}
