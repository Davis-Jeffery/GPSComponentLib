import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
export class Product {
  constructor(public id: string, public title: string, public icon: string) {}
}
@Component({
  selector: 'gps-apps-sidebar',
  templateUrl: './apps-sidebar.component.html',
  styleUrls: ['./apps-sidebar.component.scss'],
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
