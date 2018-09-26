import { accountStatus } from './account-status.model';

export class LoanAccount {
  constructor(
    public id: number,
    public loanName: string,
    public loanType: string,
    public balance: number,
    public rateApr: number,
    public PaymentDueDate: string,
    public laonAccountStatus: accountStatus,
  ) {}
}
