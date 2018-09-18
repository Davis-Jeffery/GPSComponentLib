import { accountStatus } from './account-status.model';

export class LoanAccount {
  constructor(
    public id: string,
    public loanName: string,
    public loanType: string,
    public balance: number,
    public rateApr: string,
    public PaymentDueDate: string,
    public laonAccountStatus: accountStatus,
  ) {}
}
