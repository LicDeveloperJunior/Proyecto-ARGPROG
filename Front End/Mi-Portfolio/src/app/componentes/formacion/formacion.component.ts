import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFormacion } from 'src/app/modelos/IFormacion';
import { FormacionService } from 'src/app/servicios/api/formacion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less']
})
export class FormacionComponent implements OnInit {
  private url: string = environment.urlApiBackend;
  public formaciones!: IFormacion[];
  constructor(private formacionService: FormacionService) { }

  ngOnInit(): void {
    this.obtenerFormaciones();
  }

  public obtenerFormaciones() {
    this.formacionService.obtenerFormaciones().subscribe({
      next: (response: IFormacion[]) => {
        this.formaciones = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
