export class note {
  constructor(
    public contactType: contactType,
    public note: string,
    public dateTime: string,
  ) {}
}

export enum contactType {
  CUSTOMER_WALK_IN = 'CUSTOMER_WALK_IN',
  PHONE_CALL = 'PHONE_CALL',
  TICKET = 'TICKET',
  ONLINE_CHAT = 'ONLINE_CHAT',
  OTHER = 'OTHER',
}
