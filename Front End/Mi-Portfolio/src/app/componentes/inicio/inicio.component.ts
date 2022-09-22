import { Component, OnInit } from '@angular/core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {
  emoteInicio = faUserGraduate;
  datos:any;

  constructor() { }

  ngOnInit(): void {
  }

}
