import { customerAccount } from './customer-account.model';

export class Reminder {
  constructor(
    public id: string,
    public isComplete: boolean,
    public title: string,
    public description: string,
    public attatchedAccount: customerAccount,
    public link?: string,
    public time?: string,
  ) {}
}
