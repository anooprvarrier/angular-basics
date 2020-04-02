import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatDialogModule
} from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CurrencySelectionComponent } from './filters/currency-selection/currency-selection.component';
import { AppConfigService } from 'ecarelib/lib/services/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LandingPageComponent,
    CurrencySelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    EmployeeService,
    AppConfigService
  ],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    CurrencySelectionComponent,
    LandingPageComponent
],
})
export class AppModule { }
