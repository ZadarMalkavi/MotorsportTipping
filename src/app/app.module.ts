import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RecordTipsComponent } from './views/record-tips/record-tips.component';

import {HttpClientModule} from '@angular/common/http';
import { DriversService } from './services/drivers.service';


@NgModule({
  declarations: [
    AppComponent,
    RecordTipsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [DriversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
