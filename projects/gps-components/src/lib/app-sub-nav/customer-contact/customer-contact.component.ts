import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { NavOverlayComponent } from "../../nav-overlay/nav-overlay.component";

@Component({
  selector: "gps-customer-contact",
  templateUrl: "./customer-contact.component.html",
  styleUrls: ["./customer-contact.component.scss"]
})
export class CustomerContactComponent implements OnInit {
  @Input()
  width: string = "500px";

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.closeAll();

    this.dialog.open(NavOverlayComponent, {
      id: "customer-contact-dialog",
      width: this.width,
      autoFocus: false,
      hasBackdrop: false,

      data: {
        title: "Customer Contact",
        seeAllButton: false
      },

      position: {
        top: "124px",
        right: "16px"
      }
    });
  }
}
