import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { AllcardComponent } from './allcard/allcard.component';
import { AllcardService } from './allcard.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AllcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AllcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
