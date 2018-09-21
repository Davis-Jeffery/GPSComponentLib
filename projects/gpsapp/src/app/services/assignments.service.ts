import { Injectable } from '@angular/core';
import { CustomerAccountService } from './customer-account.service';
import { Assignment } from '../app-models/assignment.model';

@Injectable()
export class AssignmentsService {
  assignments: Array<Assignment> = [];
  constructor(public customerAccountService: CustomerAccountService) {}

  // Our component will use this function to get the flavors
  getAssignments() {
    return this.assignments;
  }
}
