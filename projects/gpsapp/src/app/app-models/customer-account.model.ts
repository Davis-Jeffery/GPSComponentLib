import { Address } from './address.model';
import { Note } from './note.model';
import { LoanAccount } from './loan-account.model';
import { DepositAccount } from './deposit-account.model';

export class CustomerAccount {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public socialSecurityNumber: string,
    public addresses: Array<Address>,
    public middleName?: string,
    public notes?: Array<Note>,
    public loanAccounts?: Array<LoanAccount>,
    public depositAccounts?: Array<DepositAccount>,
  ) {}
}
