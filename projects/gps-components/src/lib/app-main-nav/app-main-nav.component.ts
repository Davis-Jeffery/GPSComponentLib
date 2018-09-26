import { Component, Input, ViewEncapsulation, Directive } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'gpcl-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GpclAppMainNavComponent {
  @Input()
  background = 'primary';
  @Input()
  institutionName = 'Institution Name';
  @Input()
  appsSidebar: MatDrawer;

  constructor() {}

  toggleAppsSidebar() {
    this.appsSidebar.toggle();
  }
}

@Directive({
  selector: 'gpcl-overlay-icon',
  host: { class: 'gpcl--icon-spacing' },
})
export class GpclOverlayIconDirective {}

@Directive({
  selector: 'gpcl-main-nav-middle',
  host: { class: 'search-inputs' },
})
export class GpclMainNavMiddleDirective {}
