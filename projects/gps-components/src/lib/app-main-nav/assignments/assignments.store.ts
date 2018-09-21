import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class Assignment {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public isComplete: boolean,
  ) {}
}

@Injectable()
export class AssignmentsStore {
  private assignments$: BehaviorSubject<Array<Assignment>>;
  public readonly assignments = this.assignments$.asObservable();

  public getAssignments(assignments: Array<Assignment>) {
    this.assignments$ = new BehaviorSubject(assignments);
    console.log(this.assignments$);
  }
}
