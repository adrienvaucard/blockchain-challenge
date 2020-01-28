import { Injectable } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from './app/app.component';
 
import { PdfViewerModule } from 'ng2-pdf-viewer';
 
@NgModule({
  imports: [BrowserModule, PdfViewerModule],
  //declarations: [AppComponent],
  //bootstrap: [AppComponent]
})

@Injectable({
  providedIn: 'root'
})

export class AppService {
  pdfSrc = "assets/content.pdf";
  constructor() { 

  }

  //Fonction qui récupère le PDF et son ID
  getPDFbyName (){


    let $img: any = document.querySelector('#file');
 
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
   
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
   
      reader.readAsArrayBuffer($img.files[0]);
    }
    
  }
}
