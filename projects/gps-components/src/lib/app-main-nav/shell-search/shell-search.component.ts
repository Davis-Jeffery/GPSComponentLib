import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'gps-shell-search',
  templateUrl: './shell-search.component.html',
  styleUrls: ['./shell-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShellSearch implements OnInit {
  @Input()
  theme: string;

  public searchOptions = [
    {
      value: 'Cusomters',
    },
    { value: 'Loan Accounts' },
    { value: 'Bank Accounts' },
  ];
  public selectedOption = this.searchOptions[0].value;

  constructor() {}
  ngOnInit() {}
}
