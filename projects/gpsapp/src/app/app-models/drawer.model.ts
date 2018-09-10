export class Drawer {
  constructor(
    public date: string,
    public balance: number,
    public inAmount: number,
    public outAmount: number,
    public isCheckedOut: boolean,
    public balanceType: BalanceType,
  ) {}
}

export enum BalanceType {
  CASH = 'CASH',
  CHECK = 'CHECK',
  LOAN = 'LOAN',
  DEPOSIT = 'DEPOSIT',
}
