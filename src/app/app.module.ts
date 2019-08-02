import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MarkdownModule } from 'ngx-markdown';
import {MathJaxModule} from 'ngx-mathjax';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { QuestionBankService } from './question-bank.service';

import { environment } from '../environments/environment';

import "prismjs"; //import "prismjs/prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

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
    ,CheckboxesComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule
    ,BrowserAnimationsModule
    ,DragDropModule
    ,FlexLayoutModule
    ,FormsModule
    ,MarkdownModule.forRoot() // must stay in root
    ,MaterialModule
    ,MathJaxModule.config(true, {
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    })
  ],
  providers: [
    QuestionBankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
