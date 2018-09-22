import {
  Component,
  OnInit,
  Input,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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
  maxHeight: string;
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
  isOpen: boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    for (var key in this.dialog.openDialogs) {
      if (this.dialog.openDialogs[key].id != 'reminders-dialog') {
        this.dialog.openDialogs[key].close();
      }

      if (this.dialog.openDialogs[key].id === 'reminders-dialog') {
        this.dialog.openDialogs[key].close();
        return;
      }
    }

    this.open = true;
    this.dialog.open(RemindersOverlayComponent, {
      data: {
        data: this.reminders,
        title: 'Reminders',
        seeAllButton: true,
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
export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: 'gps-reminders-overlay',
  templateUrl: './overlay-reminders.component.html',
})
export class RemindersOverlayComponent implements OnInit {
  @ViewChild('remindersRef')
  assignmentsElement: ElementRef;
  public overlayDataItems: Array<any>;
  public stringLength: string;
  public descriptions: Array<Description> = [];

  constructor(
    public dialogRef: MatDialogRef<RemindersOverlayComponent>,
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
