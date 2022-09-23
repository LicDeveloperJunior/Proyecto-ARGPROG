import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-lat-nav',
  templateUrl: './barra-lat-nav.component.html',
  styleUrls: ['./barra-lat-nav.component.less']
})
export class BarraLatNavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidebar")!.style.width="270px";
  }

  closeNav() {
    document.getElementById("mySidebar")!.style.width="0";
  }
}
