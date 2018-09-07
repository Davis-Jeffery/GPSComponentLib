import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gps-app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppMainNav implements OnInit {
  @Input()
  background: string = 'primary';
  @Input()
  institutionName: string = 'Institution Name';

  constructor() {}

  ngOnInit() {}
}
