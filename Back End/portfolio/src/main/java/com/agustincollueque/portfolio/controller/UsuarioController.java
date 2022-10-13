package com.agustincollueque.portfolio.controller;

import com.agustincollueque.portfolio.model.Usuario;
import com.agustincollueque.portfolio.service.IUsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private IUsuarioService servUsu;
       
    @GetMapping("/{id}")
    @ResponseBody
    public Usuario obtenerPersona(@PathVariable Long id) {
        return servUsu.obtenerUsuario(id);
    }
    
    @PostMapping("/agregar")
    public void agregarPersona(@RequestBody Usuario pers) {
        servUsu.crearUsuario(pers);
    }
    
    @DeleteMapping("/eliminar/{id}")
    public void eliminarPersona(@PathVariable Long id) {
        servUsu.eliminarUsuario(id);
    }
    
    @GetMapping("/")
    public List<Usuario> verPersonas() {
        return servUsu.obtenerUsuarios();
    }
}
