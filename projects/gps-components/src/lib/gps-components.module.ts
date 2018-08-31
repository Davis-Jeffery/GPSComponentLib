import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpsComponentsComponent } from './gps-components.component';
import { TableComponent } from './tables/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibMaterialModule } from './lib-material.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, LibMaterialModule],
  declarations: [GpsComponentsComponent, TableComponent],
  exports: [GpsComponentsComponent, TableComponent],
})
export class GpsComponentsModule {}
