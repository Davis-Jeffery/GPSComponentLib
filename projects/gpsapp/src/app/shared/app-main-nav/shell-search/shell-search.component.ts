import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'gps-shell-search',
  templateUrl: './shell-search.component.html',
  styleUrls: ['./shell-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShellSearchComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
