import {
  Component,
  OnInit,
  Inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NavOverlayComponent } from '../../nav-overlay/nav-overlay.component';

export class Reminder {
  constructor(
    public id: string,
    public isComplete: boolean,
    public title: string,
    public reminderDesctription: string,
    public customerAccount: CustomerAccount,
    public action?: string,
  ) {}
}

export class CustomerAccount {
  constructor(
    public customerId: string,
    public firstName: string,
    public lastName: string,
  ) {}
}

@Component({
  selector: 'gps-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
})
export class RemindersComponent implements OnInit {
  @Input()
  open: boolean = false;
  @Input()
  maxWidth: string;
  @Input()
  maxHeight: string;
  minWidth: string;
  @Input()
  minHeight: string;
  @Input()
  height: string = '400px';
  @Input()
  width: string = '500px';
  @Input()
  reminders: Array<any>;
  @Input()
  theme: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(NavOverlayComponent, {
      data: {
        data: this.reminders,
        title: 'Assignments',
      },
      maxWidth: this.maxWidth,
      // maxHeight: this.maxHeight,
      minWidth: this.minWidth,
      minHeight: this.minHeight,
      height: this.height,
      width: this.width,
      position: {
        top: '68px',
        right: '50px',
      },

      hasBackdrop: false,
    });
  }
}

export class overlayActionButton {
  constructor(
    public title: string,
    public link: string,
    public icon: boolean,
    public svg?: string,
  ) {}
}
