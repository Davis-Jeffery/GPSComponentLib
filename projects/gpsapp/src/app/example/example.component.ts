import { Component } from '@angular/core';
import { DialogRef } from '../../../../gps-components/src/lib/dialog/dialog-ref';
import { DialogConfig } from '../../../../gps-components/src/lib/dialog/dialog-config';
@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  constructor(public dialog: DialogRef, public config: DialogConfig) {}

  onClose() {
    this.dialog.close('some value');
  }
}
