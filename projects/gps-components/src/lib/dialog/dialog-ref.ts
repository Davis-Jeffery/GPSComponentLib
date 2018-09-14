import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export class DialogRef {
  constructor() {}

  close(result?: any) {
    this._afterClosed.next(result);
  }

  private readonly _afterClosed = new Subject<any>();
  afterClosed: Observable<any> = this._afterClosed.asObservable();
}
