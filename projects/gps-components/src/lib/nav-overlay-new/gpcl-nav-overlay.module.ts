import { NgModule } from '@angular/core';
import {
  GpclNavOverlayComponent,
  GpclNavOverlayHeaderTitleDirective,
  GpclNavOverlayHeaderActionDirective,
  GpclNavOverlayContentDirective,
  GpclNavOverlayListItemComponent,
  GpclListitemTitleDirective,
  GpclListItemRightSubTextDirective,
  GpclListItemTitleSubTextDirective,
  GpclNavOverlayActionsDirective,
  GpclNavOverlayDescriptionDirective,
} from './nav-overlay.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule, MatDialogModule, MatButtonModule],
  declarations: [
    GpclNavOverlayComponent,
    GpclNavOverlayHeaderTitleDirective,
    GpclNavOverlayHeaderActionDirective,
    GpclNavOverlayContentDirective,
    GpclNavOverlayListItemComponent,
    GpclListitemTitleDirective,
    GpclListItemRightSubTextDirective,
    GpclListItemTitleSubTextDirective,
    GpclNavOverlayActionsDirective,
    GpclNavOverlayDescriptionDirective,
  ],
  entryComponents: [],
  exports: [
    GpclNavOverlayComponent,
    GpclNavOverlayHeaderTitleDirective,
    GpclNavOverlayHeaderActionDirective,
    GpclNavOverlayContentDirective,
    GpclNavOverlayListItemComponent,
    GpclListitemTitleDirective,
    GpclListItemRightSubTextDirective,
    GpclListItemTitleSubTextDirective,
    GpclNavOverlayActionsDirective,
    GpclNavOverlayDescriptionDirective,
  ],
})
export class GpclNavOverlayModule {}
