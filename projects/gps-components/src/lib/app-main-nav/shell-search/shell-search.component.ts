import { Component, OnInit, Input } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'gps-shell-search',
  templateUrl: './shell-search.component.html',
  styleUrls: ['./shell-search.component.scss'],
})
export class ShellSearch implements OnInit {
  isOpen = false;
  selectedOption = '';
  searchOptions = [
    { option: 'Customers' },
    { option: 'Loan Accounts' },
    { option: 'Bank Accounts' },
  ];
  constructor(public overlay: Overlay) {}

  ngOnInit() {}
}
