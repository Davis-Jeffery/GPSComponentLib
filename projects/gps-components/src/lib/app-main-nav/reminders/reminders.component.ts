import { Component, OnInit, Inject, Input, ViewEncapsulation } from '@angular/core';
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
  maxWidth: string = '600px';
  // @Input()
  // maxHeight: string = '500px';
  minWidth: string;
  @Input()
  minHeight: string;
  // @Input()
  // height: string = '400px';
  // @Input()
  // width: string = '500px';
  @Input()
  reminders: Array<any>;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.reminders);
  }

  openDialog() {
    this.dialog.open(NavOverlayComponent, {
      data: this.reminders,
      maxWidth: this.maxWidth,
      // maxHeight: this.maxHeight,
      minWidth: this.minWidth,
      minHeight: this.minHeight,
      // height: this.height,
      // width: this.width,
      position: {
        top: '68px',
        right: '50px',
      },
      hasBackdrop: false,
    });
  }
}
