import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IHabilidad } from 'src/app/modelos/IHabilidad';
import { HabilidadService } from 'src/app/servicios/api/habilidad.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.less']
})
export class HabilidadComponent implements OnInit {
  public habilidades :IHabilidad[] = [];
  remove = faTrashCan;
  constructor(private habilidadService :HabilidadService, private modalService :NgbModal) { }

  ngOnInit(): void {
    this.obtenerHabildades();
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

  public eliminarHabilidad(idHab :number) {
    this.habilidadService.eliminarHabilidad(idHab).subscribe({
      next: () => {
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
