import {
  Component,
  OnInit,
  Inject,
  AfterContentInit,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatButton,
} from '@angular/material';
import { AssignmentsService } from '../../../services/assignments.service';
import { Assignment } from '../../../app-models/assignment.model';

@Component({
  selector: 'gps-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent implements OnInit {
  public assignments: Array<Assignment>;
  public isAssignmentsOpen: boolean = false;
  public dialogRef;
  constructor(
    public dialog: MatDialog,
    public assignmentsService: AssignmentsService,
  ) {}

  ngOnInit() {
    this.assignmentsService
      .getAllEmpoyeeAssignments(1)
      .subscribe(assignments => (this.assignments = assignments));
  }

  toggleAssignments() {
    this.isAssignmentsOpen = !this.isAssignmentsOpen;
    this.isAssignmentsOpen ? this.openAssignments() : this.closeAssignments();
  }

  openAssignments() {
    this.dialog.closeAll();
    this.dialogRef = this.dialog.open(AssignmentsOverlayComponent, {
      data: this.assignments,
      maxWidth: '500px',
      minWidth: '500px',
      width: '500px',
      position: {
        top: '68px',
        right: '16px',
      },
      autoFocus: false,
      hasBackdrop: false,
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.isAssignmentsOpen = false;
    });
  }

  closeAssignments() {
    this.isAssignmentsOpen = false;
    this.dialogRef.close();
  }
}

export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: 'gps-assignments-overlay',
  templateUrl: './overlay-assignments.component.html',
})
export class AssignmentsOverlayComponent implements AfterContentInit {
  public descriptions: Array<Description> = [];
  constructor(
    public dialogRef: MatDialogRef<AssignmentsOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public assignments: Array<Assignment>,
  ) {}

  ngAfterContentInit() {
    console.log(this.assignments);
    this.assignments.forEach(assignment => {
      this.descriptions.push(new Description(assignment.description, false));
    });
  }

  onNoClick(): void {}
}
