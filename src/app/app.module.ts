import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SurveyComponent, SurveyEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
