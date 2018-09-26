import { Component, OnInit, Inject, AfterContentInit } from '@angular/core';
import { Reminder } from '../../../app-models/reminder.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RemindersService } from '../../../services/reminders.service';
import { AssignmentsOverlayComponent } from '../assignments/assignments.component';
import { CustomerAccount } from '../../../app-models/customer-account.model';

@Component({
  selector: 'gps-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
})
export class RemindersComponent implements OnInit {
  public reminders: Array<Reminder>;
  public attachedAccounts = [];
  isRemindersOpen: boolean = false;
  dialogRef;

  constructor(
    public dialog: MatDialog,
    public remindersService: RemindersService,
  ) {}

  async ngOnInit() {
    this.remindersService.getAllEmpoyeeReminders(1).subscribe(reminders => {
      this.reminders = reminders;
    });
  }

  toggleReminders() {
    this.isRemindersOpen = !this.isRemindersOpen;
    this.isRemindersOpen ? this.openReminders() : this.closeReminders();
  }

  openReminders() {
    this.dialog.closeAll();
    this.dialogRef = this.dialog.open(RemindersOverlayComponent, {
      data: this.reminders,
      maxWidth: '500px',
      minWidth: '500px',
      width: '500px',
      position: {
        top: '68px',
        right: '50px',
      },
      autoFocus: false,
      hasBackdrop: false,
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.isRemindersOpen = false;
    });
  }

  closeReminders() {
    this.dialogRef.close();
  }
}

export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: 'gps-reminders-overlay',
  templateUrl: './overlay-reminders.component.html',
})
export class RemindersOverlayComponent implements AfterContentInit {
  public descriptions: Array<Description> = [];

  constructor(
    public dialogRef: MatDialogRef<RemindersOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public reminders: any,
  ) {}

  ngAfterContentInit() {
    console.log(this.reminders);
    this.reminders.forEach(reminder => {
      this.descriptions.push(new Description(reminder.description, false));
    });
  }
}
