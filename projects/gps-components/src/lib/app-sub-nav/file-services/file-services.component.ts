import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { NavOverlayComponent } from "../../nav-overlay/nav-overlay.component";

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
    this.dialog.closeAll();

    this.dialog.open(NavOverlayComponent, {
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
