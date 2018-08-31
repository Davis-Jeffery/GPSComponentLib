import { NgModule } from '@angular/core';
import { GpsComponentsComponent } from './gps-components.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  imports: [],
  declarations: [GpsComponentsComponent, TablesComponent],
  exports: [GpsComponentsComponent, TablesComponent],
})
export class GpsComponentsModule {}
