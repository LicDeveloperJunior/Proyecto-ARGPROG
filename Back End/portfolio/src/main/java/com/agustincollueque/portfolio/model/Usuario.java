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
public class Usuario {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO )
    private Long id;
    private String nombre;
    private String apellido;
    private String fechaNacimiento;
    private String descripcion;
    private String domicilio;

    public Usuario(Long id, String nombre, String apellido, String fechaNacimiento, String descripcion, String domicilio) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.descripcion = descripcion;
        this.domicilio = domicilio;
    }    
}
