package com.agustincollueque.portfolio.controller;

import com.agustincollueque.portfolio.model.Formacion;
import com.agustincollueque.portfolio.model.Habilidad;
import com.agustincollueque.portfolio.model.Trabajo;
import com.agustincollueque.portfolio.model.Usuario;
import com.agustincollueque.portfolio.service.IFormacionService;
import com.agustincollueque.portfolio.service.IHabilidadService;
import com.agustincollueque.portfolio.service.ITrabajoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.agustincollueque.portfolio.service.IUsuarioService;

@RestController
public class Controller {

    @Autowired
    private IUsuarioService servPers;
    @Autowired
    private IHabilidadService servHab;
    @Autowired
    private IFormacionService servForm;
    @Autowired
    ITrabajoService servTrab;

    //Usuarios
    @GetMapping("/usuarios/{id}")
    @ResponseBody
    public Usuario obtenerPersona(@PathVariable Long id) {
        return servPers.obtenerUsuario(id);
    }
    
    @PostMapping("/usuarios/agregar")
    public void agregarPersona(@RequestBody Usuario pers) {
        servPers.crearUsuario(pers);
    }
    
    @DeleteMapping("/usuarios/eliminar/{id}")
    public void eliminarPersona(@PathVariable Long id) {
        servPers.eliminarUsuario(id);
    }
    
    @GetMapping("/usuarios")
    public List<Usuario> verPersonas() {
        return servPers.obtenerUsuarios();
    }

    //Habilidades
    @GetMapping("/habilidades/{id}")
    @ResponseBody
    public Habilidad obtenerHabilidad(@PathVariable("id") Long id) {
        return servHab.obtenerHabilidad(id);
    }
    
    @GetMapping("/habilidades")
    public List<Habilidad> obtenerHabilidades() {
        return servHab.obtenerHabilidades();
    }
    
    @PostMapping("/habilidades/agregar")
    public void agregarHabilidad(@RequestBody Habilidad hab) {
        servHab.crearHabilidad(hab);
    }
    
    @DeleteMapping("/habilidades/eliminar/{id}")
    public void eliminarHabilidad(@PathVariable("id") Long id) {
        servHab.eliminarHabilidad(id);
    }

    //Formacion
    @GetMapping("/formacion")
    public List<Formacion> obtenerFormaciones() {
        return servForm.obtenerFormaciones();
    }
    
    @GetMapping("/formacion/{id}")
    public Formacion obtenerFormacion(@PathVariable("id") Long id) {
        return servForm.obtenerFormacion(id);
    }
    
    @PostMapping("/formacion/agregar")    
    public void agregarFormacion(@RequestBody Formacion form) {
        servForm.crearFormacion(form);
    }
    
    @DeleteMapping("/formacion/eliminar/{id}")
    public void eliminarFormacion(@PathVariable("id") Long id) {
        servForm.eliminarFormacion(id);
    }
    
    @GetMapping("/trabajos")
    public List<Trabajo> obtenerTrabajos() {
        return servTrab.obtenerTrabajos();
    }
    
    @GetMapping("/trabajos/{id}")
    public Trabajo obtenerTrabajo(@PathVariable("id") Long id) {
        return servTrab.obtenerTrabajo(id);
    }
    
    @PostMapping("/trabajos/agregar")
    public void agregarTrabajo(@RequestBody Trabajo trab) {
        servTrab.crearTrabajo(trab);
    }
    
    @DeleteMapping("/trabajos/eliminar/{id}")
    public void eliminarTrabajo(@PathVariable("id") Long id) {
        servTrab.eliminarTrabajo(id);
    }
}
