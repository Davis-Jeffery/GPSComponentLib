import {
  Component,
  OnInit,
  Input,
  Directive,
  ViewEncapsulation
} from "@angular/core";

export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: "gpcl-input-combo",
  templateUrl: "./input-combo.component.html",
  styleUrls: ["./input-combo.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class InputComboComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

@Directive({
  selector: "[button-icon]",
  host: { class: "button-icon svg-container" }
})
export class ButtonIconDirective {}

@Directive({
  selector: "[button-text]",
  host: { class: "button-text" }
})
export class ButtonTextDirective {}

@Directive({
  selector: "[select-container]",
  host: { class: "input-container" }
})
export class SelectOptionDirective {}
