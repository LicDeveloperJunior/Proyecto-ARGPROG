package com.agustincollueque.portfolio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter @Setter
public class Formacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String logoEmpresa;
    private String empresa;
    private String descripcion;
    private String enlace;
    private String imagen;

    public Formacion(Long id, String logoEmpresa, String empresa, String descripcion, String enlace, String imagen) {
        this.id = id;
        this.logoEmpresa = logoEmpresa;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.imagen = imagen;
    }
}
