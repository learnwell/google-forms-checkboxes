import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';

@NgModule({
  declarations: [
    AppComponent
    ,CheckboxesComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,DragDropModule
    ,FlexLayoutModule
    ,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
