import {
  CustomerContactComponent,
  OverlayCustomerContactComponent,
} from './app-sub-nav/customer-contact/customer-contact.component';
import { CustomerNotesComponent } from './app-sub-nav/customer-notes/customer-notes.component';
import { FileServicesComponent } from './app-sub-nav/file-services/file-services.component';
import { AppSubNavComponent } from './app-sub-nav/app-sub-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpsComponentsComponent } from './gps-components.component';
import { TableComponent } from './tables/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibMaterialModule } from './lib-material.module';
import {
  GpclAppMainNavComponent,
  GpclOverlayIconDirective,
} from './app-main-nav/app-main-nav.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import {
  AppsSidebarComponent,
  GpclNavSectionLabelDirective,
  GpclNavListDirective,
  GpclNavItemIconDirective,
  GpclNavItemTextDirective,
  GpclNavItemComponent,
} from './app-main-nav/apps-sidebar/apps-sidebar.component';
import { ToPrettyPipe } from './pipes/to-pretty.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GpclNavOverlayModule } from './nav-overlay-new/gpcl-nav-overlay.module';
import { GpclAppMainNavModule } from './app-main-nav/app-main-nav.module';
@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LibMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //my modules
    GpclNavOverlayModule,
    GpclAppMainNavModule,
  ],
  declarations: [
    GpsComponentsComponent,
    OverlayCustomerContactComponent,
    TableComponent,
    AppSubNavComponent,
    FileServicesComponent,
    CustomerContactComponent,
    CustomerNotesComponent,
    ToPrettyPipe,

    // sidebar split module
    AppsSidebarComponent,
    GpclNavSectionLabelDirective,
    GpclNavListDirective,
    GpclNavItemIconDirective,
    GpclNavItemTextDirective,
    GpclNavItemComponent,
  ],
  entryComponents: [OverlayCustomerContactComponent],
  exports: [
    GpsComponentsComponent,

    TableComponent,
    AppSubNavComponent,
    ToPrettyPipe,
    AppSubNavComponent,

    // sidebar split module
    AppsSidebarComponent,
    GpclNavSectionLabelDirective,
    GpclNavListDirective,
    GpclNavItemIconDirective,
    GpclNavItemTextDirective,
    GpclNavItemComponent,

    GpclAppMainNavModule,
    GpclNavOverlayModule,
    LibMaterialModule,
  ],
})
export class GpsComponentsModule {}
