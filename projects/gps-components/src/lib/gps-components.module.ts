import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpsComponentsComponent } from './gps-components.component';
import { TableComponent } from './tables/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibMaterialModule } from './lib-material.module';
import { ModalComponent } from './modal/modal.component';
import { AppMainNav } from './app-main-nav/app-main-nav.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, LibMaterialModule],
  declarations: [
    GpsComponentsComponent,
    AppMainNav,
    TableComponent,
    ModalComponent,
  ],
  exports: [GpsComponentsComponent, AppMainNav, TableComponent, ModalComponent],
})
export class GpsComponentsModule {}
