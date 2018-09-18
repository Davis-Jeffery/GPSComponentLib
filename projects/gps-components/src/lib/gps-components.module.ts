import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpsComponentsComponent } from './gps-components.component';
import { TableComponent } from './tables/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibMaterialModule } from './lib-material.module';
import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { RemindersComponent } from './app-main-nav/reminders/reminders.component';
import { AssignmentsComponent } from './app-main-nav/assignments/assignments.component';
import { ShellSearchComponent } from './app-main-nav/shell-search/shell-search.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NavOverlayComponent } from './nav-overlay/nav-overlay.component';
import { AppsSidebarComponent } from './app-main-nav/apps-sidebar/apps-sidebar.component';
import { ToPrettyPipe } from './pipes/to-pretty.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LibMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GpsComponentsComponent,
    AppMainNavComponent,
    RemindersComponent,
    ShellSearchComponent,
    AssignmentsComponent,
    TableComponent,
    NavOverlayComponent,
    AppsSidebarComponent,
    ToPrettyPipe,
  ],
  entryComponents: [NavOverlayComponent],
  exports: [
    GpsComponentsComponent,
    AppMainNavComponent,
    TableComponent,
    AppsSidebarComponent,
    ToPrettyPipe,
  ],
})
export class GpsComponentsModule {}
