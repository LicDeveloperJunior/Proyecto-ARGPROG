import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.less']
})
export class ContactoComponent implements OnInit {
  datos:any;
  telef = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
