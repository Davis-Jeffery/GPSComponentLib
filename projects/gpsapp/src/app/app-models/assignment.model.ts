export class Assignment {
  constructor(
    public id: string,
    public isComplete: boolean,
    public title: string,
    public description: string,
    public action?: string,
  ) {}
}
