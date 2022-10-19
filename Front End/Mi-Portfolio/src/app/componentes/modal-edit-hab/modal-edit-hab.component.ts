import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { HabilidadService } from 'src/app/servicios/api/habilidad.service';
import { IHabilidad } from 'src/app/modelos/IHabilidad';

@Component({
  selector: 'app-modal-edit-hab',
  templateUrl: './modal-edit-hab.component.html',
  styleUrls: ['./modal-edit-hab.component.less']
})
export class ModalEditHabComponent implements OnInit {
  edit = faPencil;
  @Input() editHabilidad? :IHabilidad;
  constructor(private habilidadService :HabilidadService, private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal(contenido:any) {
    this.modalService.open(contenido, {centered:true});
  }

  public editarHabilidad(formHab: NgForm) {
    this.habilidadService.actualizarHabilidad(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.modalService.dismissAll();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
