import {
  Component,
  OnInit,
  Input,
  Inject,
  ViewChild,
  ElementRef,
  ViewEncapsulation
} from "@angular/core";
import { MatDialog } from "@angular/material";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "gps-customer-contact",
  templateUrl: "./customer-contact.component.html",
  styleUrls: ["./customer-contact.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CustomerContactComponent implements OnInit {
  @Input()
  width: string = "500px";

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    for (var key in this.dialog.openDialogs) {
      if (this.dialog.openDialogs[key].id != "customer-contact-dialog") {
        this.dialog.openDialogs[key].close();
      }

      if (this.dialog.openDialogs[key].id === "customer-contact-dialog") {
        this.dialog.openDialogs[key].close();
        return;
      }
    }

    this.dialog.open(OverlayCustomerContactComponent, {
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

export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: "gps-overlay-customer-contact",
  templateUrl: "./overlay-customer-contact.component.html"
})
export class OverlayCustomerContactComponent implements OnInit {
  @ViewChild("assignmentsRef")
  assignmentsElement: ElementRef;
  public overlayDataItems: Array<any>;
  public stringLength: string;
  public descriptions: Array<Description> = [];

  constructor(
    public dialogRef: MatDialogRef<OverlayCustomerContactComponent>,
    @Inject(MAT_DIALOG_DATA) public overlayData
  ) {
    this.overlayDataItems = overlayData.data;
  }

  ngOnInit() {
    // this.overlayDataItems.forEach(x => {
    //   this.descriptions.push(new Description(x.description, false));
    // });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
