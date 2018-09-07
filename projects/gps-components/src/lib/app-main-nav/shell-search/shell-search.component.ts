import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import { MatFormField } from '@angular/material';
// import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
// import { Highlightable, ActiveDescendantKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'gps-shell-search',
  templateUrl: './shell-search.component.html',
  styleUrls: ['./shell-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShellSearch implements OnInit {
  @ViewChild('searchInput')
  input: MatFormField;
  constructor() {}

  ngOnInit() {
    this.input.updateOutlineGap();
  }
}
