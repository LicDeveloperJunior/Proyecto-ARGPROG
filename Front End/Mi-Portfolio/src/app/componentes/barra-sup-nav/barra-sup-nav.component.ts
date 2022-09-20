import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-barra-sup-nav',
  templateUrl: './barra-sup-nav.component.html',
  styleUrls: ['./barra-sup-nav.component.less']
})
export class BarraSupNavComponent implements OnInit {
  datos:any;
  insta = faInstagram;
  face = faFacebook;
  what = faWhatsapp;
  git = faGithub;
  link = faLinkedin;
  constructor(private temaServicio: TemaService) {
    this.cambiarTema(this.temaServicio.getTema())
   }

  ngOnInit(): void {
  }

  cambiarTema(nombre: string) {
    this.temaServicio.setTema(nombre);
  }

}
