import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTableModule } from '@angular/material';
import { SortablejsModule } from 'angular-sortablejs';
import { AppComponent } from './app.component';
import { RecordTipsComponent } from './views/record-tips/record-tips.component';

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
    MatTableModule,
    SortablejsModule
  ],
  providers: [DriversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
