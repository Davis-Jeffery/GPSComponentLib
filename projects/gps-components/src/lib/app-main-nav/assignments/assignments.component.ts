import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NavOverlayComponent } from '../../nav-overlay/nav-overlay.component';

@Component({
  selector: 'gps-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent implements OnInit {
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
  assignments: Array<any>;
  @Input()
  theme: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    if (!this.dialog.openDialogs.length) {
      this.dialog.open(NavOverlayComponent, {
        data: {
          data: this.assignments,
          title: 'Assignments',
        },
        maxWidth: this.maxWidth,
        // maxHeight: this.maxHeight,
        minWidth: this.minWidth,
        // minHeight: this.minHeight,
        // height: this.height,
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
