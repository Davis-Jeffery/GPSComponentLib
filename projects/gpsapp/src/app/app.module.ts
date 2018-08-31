import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GpsComponentsModule } from 'gps-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GpsComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
