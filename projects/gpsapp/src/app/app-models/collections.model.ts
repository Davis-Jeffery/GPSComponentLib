export class Collections {
  constructor(
    public id: string,
    public isComplete: boolean,
    public firstName: string,
    public lastName: string,
    public loanName: string,
    public phoneNumber: string,
    public emailAddress: string,
    public mailingAddress: string,
    public attempts: number,
    public loanID: string,
    public reason: string,
    public amountDue: number,
    public dateDue: string,
  ) {}
}
