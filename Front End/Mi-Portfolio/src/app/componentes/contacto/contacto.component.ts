import { Component, OnInit } from '@angular/core';
import { faMobileScreenButton, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.less']
})
export class ContactoComponent implements OnInit {
  datos:any;
  telef = faMobileScreenButton;
  lugar = faLocationDot;
  email = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
