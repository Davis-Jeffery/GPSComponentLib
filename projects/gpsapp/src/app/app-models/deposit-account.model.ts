export class DepositAccount {
  constructor(
    public id: number,
    public accountType: depositAccountType,
    public balance: number,
  ) {}
}

export enum depositAccountType {
  SAVINGS = 'SAVINGS',
  CHECKING = 'CHECKING',
  RETIREMENT = 'RETIREMENT',
}
