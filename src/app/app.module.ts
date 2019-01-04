import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
MatToolbarModule,
MatButtonModule,
MatSidenavModule,
MatIconModule,
MatListModule,
MatCardModule
} from '@angular/material';

// components
import { AppComponent } from './app.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

// forms
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
