import { Assignment } from './assignment.model';
import { Reminder } from './reminder.model';
import { AccessLevel } from './access-level.model';
import { Collections } from './collections.model';
import { Drawer } from './drawer.model';
import { product } from './product.model';

export class Employee {
  constructor(
    public employeeId: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public accessLevel: AccessLevel,
    public globalProducts: Array<product>,
    public AdminProducts: Array<product>,
    public reminders: Array<Reminder>,
    public assignments?: Array<Assignment>,
  ) {}
}

export function makeFullName(): string {
  return this.firstName + ' ' + this.lastName;
}
