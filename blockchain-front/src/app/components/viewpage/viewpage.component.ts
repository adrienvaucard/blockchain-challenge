import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  pdfSrc: string = "../../assets/content.pdf";

  constructor() { }

  ngOnInit() {
  }

}
