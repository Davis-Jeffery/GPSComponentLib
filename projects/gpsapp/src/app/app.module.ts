import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GpsComponentsModule } from 'gps-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAngularMaterialModule } from './angular-material.module';
import { AccessLevelService } from './services/access-level.service';
import { AssignmentsService } from './services/assignments.service';
import { CustomerAccountService } from './services/customer-account.service';
import { EmployeeService } from './services/employee.service';
import { RemindersService } from './services/reminders.service';
import { HttpClientModule } from '@angular/common/http';
import { GpsMainNavModule } from './shared/app-main-nav/main-nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GpsComponentsModule,
    BrowserAnimationsModule,
    CustomAngularMaterialModule,
    HttpClientModule,
    GpsMainNavModule,
  ],
  providers: [
    AccessLevelService,
    AssignmentsService,
    CustomerAccountService,
    EmployeeService,
    RemindersService,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
