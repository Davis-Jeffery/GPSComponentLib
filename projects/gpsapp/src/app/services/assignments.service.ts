import { Injectable } from '@angular/core';
import { CustomerAccountService } from './customer-account.service';
import { Assignment } from '../app-models/assignment.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AssignmentsService {
  assignments: Array<Assignment> = [];
  url = 'http://localhost:3000/employees/';
  constructor(
    private http: HttpClient,
    public customerAccountService: CustomerAccountService,
  ) {}

  // Our component will use this function to get the flavors
  getAllEmpoyeeAssignments(employeeId: number): Observable<Array<Assignment>> {
    return this.http
      .get<Array<Assignment>>(this.url + employeeId + '/assignments')
      .pipe(map(assignments => assignments));
  }
}
