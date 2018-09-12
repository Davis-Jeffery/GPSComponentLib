import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class LibMaterialModule {}
