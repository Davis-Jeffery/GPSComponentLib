export class Reminder {
  constructor(
    public id: string,
    public isComplete: boolean,
    public title: string,
    public desctription: string,
    public action?: string,
  ) {}
}
