import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject
} from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "gps-file-services",
  templateUrl: "./file-services.component.html",
  styleUrls: ["./file-services.component.scss"]
})
export class FileServicesComponent implements OnInit {
  @Input()
  width: string = "500px";

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    console.log("hit");
  }
}

export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: "gps-overlay-file-services",
  templateUrl: "./overlay-file-services.component.html"
})
export class OverlayFileServicesComponent implements OnInit {
  @ViewChild("assignmentsRef")
  assignmentsElement: ElementRef;
  public overlayDataItems: Array<any>;
  public stringLength: string;
  public descriptions: Array<Description> = [];

  constructor(
    public dialogRef: MatDialogRef<OverlayFileServicesComponent>,
    @Inject(MAT_DIALOG_DATA) public overlayData
  ) {
    this.overlayDataItems = overlayData.data;
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
