import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';
export class Product {
  constructor(public id: string, public title: string, public icon: string) {}
}
@Directive({
  selector: 'label[gpcl-nav-section-label]',
  host: { class: 'gpcl--nav-label' },
})
export class GpclNavSectionLabelDirective {}

@Directive({
  selector: 'mat-nav-list[gpcl-nav-list]',
  host: { class: 'gpcl--apps-list' },
})
export class GpclNavListDirective {}

@Directive({
  selector: 'svg[gpcl-nav-item-icon]',
  host: { class: 'gpcl--nav-link-icon' },
})
export class GpclNavItemIconDirective {}

@Directive({
  selector: 'span[gpcl-nav-item-text]',
  host: { class: 'gpcl--nav-link-text' },
})
export class GpclNavItemTextDirective {}

@Component({
  selector: 'mat-list-item[gpcl-nav-item]',
  templateUrl: './nav-item.component.html',
  host: { class: 'nav-link' },
  encapsulation: ViewEncapsulation.None,
})
export class GpclNavItemComponent {}

@Component({
  selector: 'gps-apps-sidebar',
  templateUrl: './apps-sidebar.component.html',
  styleUrls: ['./apps-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppsSidebarComponent {
  constructor() {}
  @Input()
  employeeName: string;
  @Input()
  employeeRole: string;
}
