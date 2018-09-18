import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NavOverlayComponent } from '../../nav-overlay/nav-overlay.component';

@Component({
  selector: 'gps-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
})
export class RemindersComponent implements OnInit {
  @Input()
  open = false;
  @Input()
  maxWidth: string;
  @Input()
  maxHeight = '400px';
  minWidth: string;
  @Input()
  minHeight: string;
  @Input()
  height = '400px';
  @Input()
  width = '500px';
  @Input()
  reminders: Array<any>;
  @Input()
  theme: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.closeAll();

    this.dialog.open(NavOverlayComponent, {
      data: {
        data: this.reminders,
        title: 'Reminders',
      },
      maxWidth: this.maxWidth,
      minWidth: this.minWidth,
      width: this.width,
      position: {
        top: '68px',
        right: '50px',
      },
      id: 'reminders-dialog',
      autoFocus: false,
      hasBackdrop: false,
    });
  }
}
