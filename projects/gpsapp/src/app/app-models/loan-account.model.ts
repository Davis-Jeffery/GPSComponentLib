import { accountStatus } from './account-status.model';

export class loanAccount {
  constructor(
    public id: string,
    public loanName: string,
    public loanType: string,
    public balance: number,
    public rateApr: string,
    public PaymentDueDate: string,
    public accountStatus: accountStatus,
  ) {}
}
