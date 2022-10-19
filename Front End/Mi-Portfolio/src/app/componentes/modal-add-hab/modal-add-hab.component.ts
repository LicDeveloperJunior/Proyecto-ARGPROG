import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { HabilidadService } from 'src/app/servicios/api/habilidad.service';

@Component({
  selector: 'app-modal-hab',
  templateUrl: './modal-add-hab.component.html',
  styleUrls: ['./modal-add-hab.component.less']
})
export class ModalAddHabComponent implements OnInit {
  add = faAdd;
  constructor(private habilidadService :HabilidadService, private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal(contenido:any) {
    this.modalService.open(contenido, {centered:true});
  }

  public agregarHabilidad(formHab: NgForm) {
    this.habilidadService.agregarHabilidad(formHab.value).subscribe({
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
