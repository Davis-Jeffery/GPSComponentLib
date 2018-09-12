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

  ngOnInit() {console.log(this.overlayDataItems)}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
