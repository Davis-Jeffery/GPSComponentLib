import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'gps-nav-overlay',
  templateUrl: './nav-overlay.component.html',
  styleUrls: ['./nav-overlay.component.scss'],
})
export class NavOverlayComponent implements OnInit {
  public dialogTitle: string;
  public overlayDataItems: Array<any>;
  constructor(
    public dialogRef: MatDialogRef<NavOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public overlayData,
  ) {
    this.dialogTitle = overlayData.title;
    this.overlayDataItems = overlayData.data;
  }

  ngOnInit() {
    console.log(this.overlayData);
    console.log(this.overlayData.title);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  // this is needing to be defined from the gpsapp or whatever app may be using out component.
  public assignments = [
    {
      isComplete: true,
      action: 'Call',
      account: 'Dwight K Schrute',
      assignmentTitle: 'do something cool',
      assignmentDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time: '3:45PM - 5:00PM',
    },
    {
      isComplete: false,
      action: 'call',
      account: 'Michael Scott',
      assignmentTitle: 'do something cooler than before',
      assignmentDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time: '2:45AM - 3:00PM',
    },
  ];
}
