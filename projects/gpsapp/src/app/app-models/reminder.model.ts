import { CustomerAccount } from './customer-account.model';

export class Reminder {
  constructor(
    public id: string,
    public isComplete: boolean,
    public title: string,
    public reminderDesctription: string,
    public customerAccount: CustomerAccount,
    public action?: string,
  ) {}
}
