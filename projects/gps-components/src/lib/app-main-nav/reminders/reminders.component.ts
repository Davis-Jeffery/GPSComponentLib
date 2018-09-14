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
    console.log(this.dialog.openDialogs)
    
    if (!this.dialog.openDialogs.length) {
      this.dialog.open(NavOverlayComponent, {
        data: {
          data: this.reminders,
          title: 'Reminders',
        },
        maxWidth: this.maxWidth,
        maxHeight: this.maxHeight,
        minWidth: this.minWidth,
        minHeight: this.minHeight,
        height: this.height,
        width: this.width,
        position: {
          top: '68px',
          right: '50px',
        },
        autoFocus: false,
        hasBackdrop: false,
      });
    } else {
      this.dialog.closeAll();
    }
  }
}