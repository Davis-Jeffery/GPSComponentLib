export class Assignment {
  constructor(
    public id: string,
    public isComplete: boolean,
    public desctription: string,
    public action: string,
    public link?: string,
    public time?: string,
  ) {}
}
