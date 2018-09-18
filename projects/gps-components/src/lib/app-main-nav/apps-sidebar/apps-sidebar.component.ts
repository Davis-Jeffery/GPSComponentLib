import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
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
  host: { class: 'gpcl--user-apps-list' },
})
export class GpclNavListDirective {}

@Directive({
  selector: 'gpcl-nav-item-icon',
  host: { class: 'link-icon' },
})
export class GpclNavItemIconDirective {}

@Directive({
  selector: 'span[gpcl-nav-item-text]',
  host: { class: 'link-text' },
})
export class GpclNavItemTextDirective {}

@Component({
  selector: 'gpcl-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GpclNavItemComponent {}

@Component({
  selector: 'gps-apps-sidebar',
  templateUrl: './apps-sidebar.component.html',
  styleUrls: ['./apps-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppsSidebarComponent implements AfterViewInit {
  @Input()
  activeApp: string;
  @Output()
  selectApp: EventEmitter<string> = new EventEmitter();
  @Input()
  globalProducts: Array<Product>;
  @Input()
  adminProducts: Array<Product>;
  constructor() {}
  @Input()
  employeeName: string;
  @Input()
  employeeRole: string;
  currentApp: string;

  ngAfterViewInit() {
    setTimeout(() => {
      this.currentApp = this.activeApp;
    });
  }

  clickedProduct(product) {
    this.currentApp = product.innerHTML;
    this.selectApp.emit(product.innerHTML);
  }
}
