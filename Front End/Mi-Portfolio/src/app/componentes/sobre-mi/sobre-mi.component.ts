import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IHabilidad } from 'src/app/modelos/IHabilidad';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { HabilidadService } from 'src/app/servicios/api/habilidad.service';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.less']
})
export class SobreMiComponent implements OnInit {
  public usuario? :IUsuario;
  public habilidades! :IHabilidad[];
  constructor(private usuarioService :UsuarioService,
     private habilidadService :HabilidadService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    this.obtenerHabildades();
  }

  public obtenerUsuario() {
    this.usuarioService.obtenerUsuario().subscribe({
      next:(response:IUsuario | undefined) => {
        this.usuario = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

  public obtenerHabildades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: (response :IHabilidad[]) => {
        this.habilidades = response;
      },
      error: (error :HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
