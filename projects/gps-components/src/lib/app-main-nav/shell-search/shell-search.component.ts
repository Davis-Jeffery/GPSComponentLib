// import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { map, startWith } from 'rxjs/operators';

// @Component({
//   selector: 'gps-shell-search',
//   templateUrl: './shell-search.component.html',
//   styleUrls: ['./shell-search.component.scss'],
//   encapsulation: ViewEncapsulation.None,
// })
// export class ShellSearchComponent implements OnInit {
//   myControl = new FormControl();
//   options: string[] = ['one', 'two', 'three'];
//   filteredOptions: Observable<string[]>;

//   @Input()
//   theme: string;

//   public searchOptions = [
//     {
//       value: 'Cusomters',
//     },
//     { value: 'Loan Accounts' },
//     { value: 'Bank Accounts' },
//   ];
//   public selectedOption = this.searchOptions[0].value;

//   constructor() {}
//   ngOnInit() {
//     this.filteredOptions = this.myControl.valueChanges.pipe(
//       startWith(''),
//       map(value => this._filter(value)),
//     );
//   }

//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     return this.options.filter(
//       option => option.toLowerCase().indexOf(filterValue) === 0,
//     );
//   }
// }
