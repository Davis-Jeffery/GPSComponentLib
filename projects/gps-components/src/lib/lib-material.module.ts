import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ]
})
export class LibMaterialModule {}
