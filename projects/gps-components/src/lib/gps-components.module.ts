import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpsComponentsComponent } from './gps-components.component';
import { TableComponent } from './tables/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibMaterialModule } from './lib-material.module';
import { AppMainNav } from './app-main-nav/app-main-nav.component';
import { RemindersComponent } from './app-main-nav/reminders/reminders.component';
import { Assignments } from './app-main-nav/assignments/assignments.component';
import { ShellSearch } from './app-main-nav/shell-search/shell-search.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NavOverlayComponent } from './nav-overlay/nav-overlay.component';
import { AppsSidebarComponent } from './app-main-nav/apps-sidebar/apps-sidebar.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LibMaterialModule,
    DialogModule,
  ],
  declarations: [
    GpsComponentsComponent,
    AppMainNav,
    RemindersComponent,
    ShellSearch,
    Assignments,
    TableComponent,
    NavOverlayComponent,
    AppsSidebarComponent,
  ],
  entryComponents: [NavOverlayComponent],
  exports: [
    GpsComponentsComponent,
    AppMainNav,
    TableComponent,
    AppsSidebarComponent,
    DialogModule,
  ],
})
export class GpsComponentsModule {}
