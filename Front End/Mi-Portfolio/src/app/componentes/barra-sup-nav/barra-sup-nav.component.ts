import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-barra-sup-nav',
  templateUrl: './barra-sup-nav.component.html',
  styleUrls: ['./barra-sup-nav.component.less']
})
export class BarraSupNavComponent implements OnInit {
  datos: any;
  insta = faInstagram;
  face = faFacebook;
  what = faWhatsapp;
  git = faGithub;
  link = faLinkedin;
  dark = faMoon;
  light = faSun;
  menu = faBars;
  user = faUserSecret;

  temaActual: string;

  constructor(private temaServicio: TemaService) {
    this.temaActual = this.temaServicio.getTema();
    this.temaServicio.setTema(this.temaServicio.getTema());
  }

  ngOnInit(): void {
  }

  cambiarTema() {
    if (this.temaActual === "default") {
      this.temaActual = "dark";
      this.temaServicio.setTema("dark");
    } else {
      this.temaServicio.setTema("default");
      this.temaActual = "default";
    }
  }
}
