import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'gps-file-services',
  templateUrl: './file-services.component.html',
  styleUrls: ['./file-services.component.scss'],
})
export class FileServicesComponent implements OnInit {
  @Input()
  width: string = '500px';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    console.log('hit');
  }
}
