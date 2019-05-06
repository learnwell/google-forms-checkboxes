import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';

import "prismjs"; //import "prismjs/prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import { CheckboxComponent } from './checkboxes/checkbox/checkbox.component';

/**
 ## For typescript syntax highlighting
 # app.module.ts
 import "prismjs/components/prism-typescript.min.js";

 ## For javascript syntax highlighting
 # app.module.ts
 import "prismjs/components/prism-javascript.min.js";
 
 ## For line highlighting
 # app.module.ts
 import "prismjs/plugins/line-highlight/prism-line-highlight.js";
 # angular.json
 ,"node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css"
 */

@NgModule({
  declarations: [
    AppComponent
    ,CheckboxesComponent, CheckboxComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,DragDropModule
    ,FlexLayoutModule
    ,FormsModule
    ,MarkdownModule.forRoot() // must stay in root
    ,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
