import {
  Component,
  OnInit,
  Input,
  Directive,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Highlightable, ActiveDescendantKeyManager } from '@angular/cdk/a11y';

@Directive({
  selector: '[role="option"]',
  host: {
    '[class.active-option]': 'isActive',
  },
})
export class SelectOption implements Highlightable {
  isActive = false;

  setActiveStyles(): void {
    this.isActive = true;
  }
  setInactiveStyles(): void {
    this.isActive = false;
  }
}

@Component({
  selector: 'gps-shell-search',
  templateUrl: './shell-search.component.html',
  styleUrls: ['./shell-search.component.scss'],
})
export class ShellSearch {
  @ViewChildren(SelectOption)
  options: QueryList<SelectOption>;
  keyManager: ActiveDescendantKeyManager<SelectOption>;

  public isOpen = false;
  public selectedOption = '';
  public searchOptions = [
    { option: 'Customers' },
    { option: 'Loan Accounts' },
    { option: 'Bank Accounts' },
  ];

  constructor(public overlay: Overlay) {}

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.options).withWrap();
  }

  keydownHandler(event: KeyboardEvent, option: string) {
    this.keyManager.onKeydown(event);
    if (event.keyCode == 13) {
      this.selectOption(event.srcElement.nodeValue);
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }
}
