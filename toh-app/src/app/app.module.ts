import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ImgComponent } from './components/img/img.component';
import { PracticeComponent } from './components/practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
