import { CustomerNotesComponent } from "./app-sub-nav/customer-notes/customer-notes.component";
import { CustomerContactComponent } from "./app-sub-nav/customer-contact/customer-contact.component";
import { AppSubNav } from "./app-sub-nav/app-sub-nav.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { GpsComponentsComponent } from "./gps-components.component";
import { TableComponent } from "./tables/table.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibMaterialModule } from "./lib-material.module";
import { AppMainNav } from "./app-main-nav/app-main-nav.component";
import { RemindersComponent } from "./app-main-nav/reminders/reminders.component";
import { AssignmentsComponent } from "./app-main-nav/assignments/assignments.component";
import { ShellSearch } from "./app-main-nav/shell-search/shell-search.component";
import { A11yModule } from "@angular/cdk/a11y";
import { CommonModule } from "@angular/common";
import { NavOverlayComponent } from "./nav-overlay/nav-overlay.component";
import { AppsSidebarComponent } from "./app-main-nav/apps-sidebar/apps-sidebar.component";
import { DialogModule } from "./dialog/dialog.module";

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LibMaterialModule,
    DialogModule
  ],
  declarations: [
    GpsComponentsComponent,
    AppMainNav,
    AppSubNav,
    RemindersComponent,
    ShellSearch,
    AssignmentsComponent,
    CustomerNotesComponent,
    CustomerContactComponent,
    TableComponent,
    NavOverlayComponent,
    AppsSidebarComponent
  ],
  entryComponents: [NavOverlayComponent],
  exports: [
    GpsComponentsComponent,
    AppMainNav,
    AppSubNav,
    TableComponent,
    AppsSidebarComponent,
    DialogModule
  ]
})
export class GpsComponentsModule {}
