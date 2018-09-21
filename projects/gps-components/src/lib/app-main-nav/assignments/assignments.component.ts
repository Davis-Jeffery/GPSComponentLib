import {
  Component,
  OnInit,
  Input,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'gps-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent implements OnInit {
  @Input()
  open = false;
  @Input()
  maxWidth: string;
  @Input()
  maxHeight: string;
  minWidth: string;
  @Input()
  minHeight: string;
  @Input()
  height = '400px';
  @Input()
  width = '500px';
  @Input()
  assignments: Array<any>;
  @Input()
  theme: string;
  isOpen: boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(AssignmentsOverlayComponent, {
      data: {
        data: this.assignments,
        title: 'Assignments',
      },
      maxWidth: this.maxWidth,
      minWidth: this.minWidth,
      width: this.width,
      position: {
        top: '68px',
        right: '16px',
      },
      id: 'assignents',
      autoFocus: false,
      hasBackdrop: false,
    });
  }
}
export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: 'gps-assignments-overlay',
  templateUrl: './overlay-assignments.component.html',
})
export class AssignmentsOverlayComponent implements OnInit {
  public overlayDataItems: Array<any>;
  public stringLength: string;
  public descriptions: Array<Description> = [];

  constructor(
    public dialogRef: MatDialogRef<AssignmentsOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public overlayData,
  ) {
    this.overlayDataItems = overlayData.data;
  }

  ngOnInit() {
    this.overlayDataItems.forEach(x => {
      this.descriptions.push(new Description(x.description, false));
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
