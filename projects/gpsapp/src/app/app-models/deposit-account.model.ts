export class depositAccount {
  constructor(
    public id: string,
    public accountType: depositAccountType,
    public balance: number,
  ) {}
}

export enum depositAccountType {
  SAVINGS = 'SAVINGS',
  CHECKING = 'CHECKING',
  RETIREMENT = 'RETIREMENT',
}
