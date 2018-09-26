import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  RemindersComponent,
  RemindersOverlayComponent,
} from './reminders/reminders.component';
import {
  AssignmentsComponent,
  AssignmentsOverlayComponent,
} from './assignments/assignments.component';
import { MainNavComponent } from './app-main-nav.component';
import { ShellSearchComponent } from './shell-search/shell-search.component';
import { GpsComponentsModule } from 'gps-components';

@NgModule({
  imports: [CommonModule, BrowserModule, GpsComponentsModule],
  declarations: [
    MainNavComponent,
    RemindersComponent,
    AssignmentsComponent,
    ShellSearchComponent,
    AssignmentsOverlayComponent,
    RemindersOverlayComponent,
  ],
  entryComponents: [AssignmentsOverlayComponent, RemindersOverlayComponent],
  exports: [
    MainNavComponent,
    RemindersComponent,
    AssignmentsComponent,
    ShellSearchComponent,
  ],
})
export class GpsMainNavModule {}
