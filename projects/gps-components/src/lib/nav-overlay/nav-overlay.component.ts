import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export class Description { 
  constructor (
    public descriptionText: string,
    public isSeeMore: boolean,
  ) {}
}

@Component({
  selector: 'gps-nav-overlay',
  templateUrl: './nav-overlay.component.html',
  styleUrls: ['./nav-overlay.component.scss'],
})
export class NavOverlayComponent implements OnInit {
  public dialogTitle: string;
  public overlayDataItems: Array<any>;
  public stringLength: string;
  public descriptions: Array<Description> = [];

  constructor(
    public dialogRef: MatDialogRef<NavOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public overlayData,
  ) {
    this.dialogTitle = overlayData.title;
    this.overlayDataItems = overlayData.data;
  }

  ngOnInit() {
    this.overlayDataItems.forEach((x) => {
      console.log(x.description);

      this.descriptions.push(new Description (x.description, false))
      
    })
    console.log(this.descriptions)
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
