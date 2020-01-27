import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewpageComponent } from './components/viewpage/viewpage.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
