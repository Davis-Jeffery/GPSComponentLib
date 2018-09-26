import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  GpclAppMainNavComponent,
  GpclOverlayIconDirective,
  GpclMainNavMiddleDirective,
} from './app-main-nav.component';
import {
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  declarations: [
    GpclAppMainNavComponent,
    GpclOverlayIconDirective,
    GpclMainNavMiddleDirective,
  ],
  entryComponents: [],
  exports: [
    GpclAppMainNavComponent,
    GpclOverlayIconDirective,
    GpclMainNavMiddleDirective,
  ],
})
export class GpclAppMainNavModule {}
