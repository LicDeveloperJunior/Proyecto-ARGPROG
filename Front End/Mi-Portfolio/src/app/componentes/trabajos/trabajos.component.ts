import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrabajo } from 'src/app/modelos/ITrabajo';
import { TrabajoService } from 'src/app/servicios/api/trabajo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.less']
})
export class TrabajosComponent implements OnInit {
  private url:string = environment.urlApiBackend;
  public trabajos!:ITrabajo[];
  constructor(private trabajoService: TrabajoService) { }

  ngOnInit(): void {
    this.obtenerTrabajos();
  }

  public obtenerTrabajos() {
    this.trabajoService.obtenerTrabajos().subscribe({
      next: (response:ITrabajo[]) => {
        this.trabajos = response;
      },
      error: (error:HttpErrorResponse)=> {
        alert(error.message);
      }
    })
  }

}
