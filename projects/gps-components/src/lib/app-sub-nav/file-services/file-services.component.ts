import {
  Component,
  OnInit,
  Input,
  Inject,
  ViewChild,
  ElementRef
} from "@angular/core";
import { MatDialog } from "@angular/material";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

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
    for (var key in this.dialog.openDialogs) {
      if (this.dialog.openDialogs[key].id != "file-services-dialog") {
        this.dialog.openDialogs[key].close();
      }

      if (this.dialog.openDialogs[key].id === "file-services-dialog") {
        this.dialog.openDialogs[key].close();
        return;
      }
    }

    this.dialog.open(OverlayFileServicesComponent, {
      id: "file-services-dialog",
      width: this.width,
      autoFocus: false,
      hasBackdrop: false,

      data: {
        title: "File Attachments",
        seeAllButton: true
      },

      position: {
        top: "124px",
        right: "16px"
      }
    });
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
