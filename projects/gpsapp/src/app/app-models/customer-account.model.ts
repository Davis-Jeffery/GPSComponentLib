import { address } from './address.model';
import { note } from './note.model';
import { loanAccount } from './loan-account.model';
import { depositAccount } from './deposit-account.model';

export class customerAccount {
  constructor(
    public firstName: string,
    public lastName: string,
    public socialSecurityNumber: string,
    public addresses: Array<address>,
    public middleName?: string,
    public notes?: Array<note>,
    public loanAccounts?: Array<loanAccount>,
    public depositAccounts?: Array<depositAccount>,
  ) {}
}
