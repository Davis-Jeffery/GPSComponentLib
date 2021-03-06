import { CustomerAccount } from './customer-account.model';

export class Assignment {
  constructor(
    public id: number,
    public isComplete: boolean,
    public title: string,
    public description: string,
    public attatchedAccount: CustomerAccount,
    public link?: string,
    public time?: string,
  ) {}
}
