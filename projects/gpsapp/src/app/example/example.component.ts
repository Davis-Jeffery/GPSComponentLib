import { Component } from '@angular/core';
import { DialogRef } from '../../../../gps-components/src/lib/dialog/dialog-ref';
import { DialogConfig } from '../../../../gps-components/src/lib/dialog/dialog-config';
import { Observable, Subject, NextObserver } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  constructor(public dialog: DialogRef, public config: DialogConfig) {}

  onClose() {
    this.dialog.close('some value');
  }
}
