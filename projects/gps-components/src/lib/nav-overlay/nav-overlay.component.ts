<<<<<<< HEAD
import {
  Component,
  OnInit,
  Inject,
  Input,
  ViewEncapsulation
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
=======
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
>>>>>>> origin

export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
<<<<<<< HEAD
  selector: "gps-nav-overlay",
  templateUrl: "./nav-overlay.component.html",
  styleUrls: ["./nav-overlay.component.scss"],
  encapsulation: ViewEncapsulation.None
=======
  selector: 'gps-nav-overlay',
  templateUrl: './nav-overlay.component.html',
  styleUrls: ['./nav-overlay.component.scss'],
>>>>>>> origin
})
export class NavOverlayComponent implements OnInit {
  public dialogTitle: string;
  public overlayDataItems: Array<any>;
  public stringLength: string;
  public descriptions: Array<Description> = [];

  constructor(
    public dialogRef: MatDialogRef<NavOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public overlayData
  ) {
    this.dialogTitle = overlayData.title;
    this.overlayDataItems = overlayData.data;
  }

  ngOnInit() {
    this.overlayDataItems.forEach(x => {
      //console.log(x.description);
      this.descriptions.push(new Description(x.description, false));
    });
    console.log(this.descriptions);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
