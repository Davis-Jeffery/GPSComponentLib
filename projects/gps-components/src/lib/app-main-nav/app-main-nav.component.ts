import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gps-app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.scss'],
})
export class AppMainNav implements OnInit {
  @Input()
  background: string = 'primary';
  @Input()
  institutionName: string = 'Institution Name';

  constructor() {}

  ngOnInit() {}
}
