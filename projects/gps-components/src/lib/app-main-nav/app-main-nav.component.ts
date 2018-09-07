<<<<<<< HEAD
import { Component, OnInit, Input, ViewChild } from '@angular/core';
=======
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

>>>>>>> 858b99bd9e2319e1b522a754dd9a2e4a574ed75d
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
