import { Assignment } from './assignment.model';
import { Reminder } from './reminder.model';
import { AccessLevel } from './access-level.model';
import { Product } from './product.model';

export class Employee {
  constructor(
    public id: number,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public accessLevel: AccessLevel,
    public globalProducts: Array<Product>,
    public adminProducts: Array<Product>,
    public reminders: Array<Reminder>,
    public assignments?: Array<Assignment>,
  ) {}
}

export function makeFullName(): string {
  return this.firstName + ' ' + this.lastName;
}
