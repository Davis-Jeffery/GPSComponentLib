import { NgModule } from "@angular/core";
import {
  InputComboComponent,
  ButtonIconDirective,
  ButtonTextDirective,
  SelectOptionDirective
} from "./input-combo.component";
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatSelectModule],
  declarations: [
    InputComboComponent,
    ButtonIconDirective,
    ButtonTextDirective,
    SelectOptionDirective
  ],
  entryComponents: [],
  exports: [
    InputComboComponent,
    ButtonIconDirective,
    ButtonTextDirective,
    SelectOptionDirective
  ]
})
export class InputModule {}
