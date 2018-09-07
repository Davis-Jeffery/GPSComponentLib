export class CustomerAccount {
  constructor(
    public customerId: string,
    public firstName: string,
    public lastName: string,
  ) {}

  public generateFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
