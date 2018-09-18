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
  MatAutocompleteModule,
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
    MatAutocompleteModule,
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
    MatAutocompleteModule,
  ],
})
export class LibMaterialModule {}
