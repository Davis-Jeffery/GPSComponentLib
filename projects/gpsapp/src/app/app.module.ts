import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GpsComponentsModule } from 'gps-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAngularMaterialModule } from './angular-material.module';
import { ExampleComponent } from './example/example.component';
import { DialogModule } from '../../../gps-components/src/lib/dialog/dialog.module';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [
    BrowserModule,
    GpsComponentsModule,
    DialogModule,
    BrowserAnimationsModule,
    CustomAngularMaterialModule,
  ],
  providers: [],
  entryComponents: [ExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
