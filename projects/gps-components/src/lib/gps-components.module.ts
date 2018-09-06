import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpsComponentsComponent } from './gps-components.component';
import { TableComponent } from './tables/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibMaterialModule } from './lib-material.module';
import { ModalComponent } from './modal/modal.component';
import { AppMainNav } from './app-main-nav/app-main-nav.component';
import { Reminders } from './app-main-nav/reminders/reminders.component';
import { Assignments } from './app-main-nav/assignments/assignments.component';
import {
  ShellSearch,
  SelectOption,
} from './app-main-nav/shell-search/shell-search.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LibMaterialModule,
    BrowserModule,
    OverlayModule,
    A11yModule,
    CommonModule,
  ],
  declarations: [
    GpsComponentsComponent,
    AppMainNav,
    Reminders,
    ShellSearch,
    Assignments,
    TableComponent,
    ModalComponent,
    SelectOption,
  ],
  exports: [GpsComponentsComponent, AppMainNav, TableComponent, ModalComponent],
})
export class GpsComponentsModule {}
