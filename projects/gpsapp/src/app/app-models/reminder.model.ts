import { CustomerAccount } from './customer-account.model';

export class Reminder {
  constructor(
    public id: number,
    public isComplete: boolean,
    public title: string,
    public description: string,
    public attatchedAccount?: CustomerAccount,
    public time?: string,
  ) {}
}
