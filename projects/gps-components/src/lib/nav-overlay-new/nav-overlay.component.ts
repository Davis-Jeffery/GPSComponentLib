import { Component, OnInit, Directive, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

export class Description {
  constructor(public descriptionText: string, public isSeeMore: boolean) {}
}

@Component({
  selector: 'gpcl-nav-overlay',
  templateUrl: './nav-overlay.component.html',
  styleUrls: ['./nav-overlay.component.scss'],
})
export class GpclNavOverlayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Directive({
  selector: '[gpcl-nav-Overlay-header-title], gpcl-nav-Overlay-header-title',
  host: { class: 'gpcl--nav-Overlay-header-title' },
})
export class GpclNavOverlayHeaderTitleDirective {}

@Directive({
  selector: '[gpcl-nav-overlay-header-action], gpcl-nav-overlay-header-action',
  host: { class: 'gpcl--nav-overlay-header-action' },
})
export class GpclNavOverlayHeaderActionDirective {}

@Directive({
  selector: 'gpcl-nav-overlay-content, [gpcl-nav-overlay-content]',
  host: { class: 'gpcl--nav-overlay-scroll-container' },
})
export class GpclNavOverlayContentDirective {}

@Component({
  selector: 'gpcl-nav-overlay-list-item',
  templateUrl: './nav-overlay-list-item.component.html',
  host: { class: 'gpcl--overlay-row' },
  styleUrls: ['./nav-overlay.component.scss'],
})
export class GpclNavOverlayListItemComponent {}

@Directive({
  selector: 'gpcl-list-item-title, [gpcl-list-item-title]',
  host: { class: 'gpcl--list-item-title' },
})
export class GpclListitemTitleDirective {}

@Directive({
  selector: 'gpcl-list-item-right-sub-text, [gpcl-list-item-right-sub-text]',
  host: { class: 'gpcl--list-item-right-sub-text' },
})
export class GpclListItemRightSubTextDirective {}

@Directive({
  selector: 'gpcl-list-item-title-sub-text, [gpcl-list-item-title-sub-text]',
  host: { class: 'gpcl--list-item-title-sub-text' },
})
export class GpclListItemTitleSubTextDirective {}

@Directive({
  selector: 'gpcl-nav-overlay-description,',
  host: { class: 'gpcl--nav-overlay-description' },
})
export class GpclNavOverlayDescriptionDirective {
  constructor() {}
}

@Directive({
  selector: 'mat-dialog-actions[gpcl-nav-overlay-actions]',
  host: { class: 'gpcl-nav-overlay-actions' },
})
export class GpclNavOverlayActionsDirective {}
