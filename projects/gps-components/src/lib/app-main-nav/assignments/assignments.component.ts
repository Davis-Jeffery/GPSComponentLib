import { Component, OnInit, Input, QueryList } from '@angular/core';
// import { Highlightable, ActiveDescendantKeyManager } from "@angular/cdk/a11y";

@Component({
  selector: 'gps-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class Assignments implements OnInit {
  constructor() {}

  // public assignments = [
  //   {
  //     isComplete: false,
  //     action: 'Call',
  //     account: 'Dwight K Schrute',
  //     assignmentTitle: 'do something cool',
  //     assignmentDetails:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     time: '3:45PM - 5:00PM',
  //   },
  //   {
  //     isComplete: false,
  //     action: 'call',
  //     account: 'Michael Scott',
  //     assignmentTitle: 'do something cooler than before',
  //     assignmentDetails:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     time: '2:45AM - 3:00PM',
  //   },
  // ];

  ngOnInit() {}
}
