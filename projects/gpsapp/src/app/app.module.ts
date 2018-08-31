import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GpsComponentsModule } from 'gps-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GpsComponentsModule,
    BrowserAnimationsModule,
    CustomAngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
