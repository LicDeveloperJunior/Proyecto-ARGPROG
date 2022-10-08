package com.agustincollueque.portfolio.service;

import com.agustincollueque.portfolio.model.Formacion;
import com.agustincollueque.portfolio.repository.FormacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.agustincollueque.portfolio.exception.FormacionNotFoundException;

@Service
public class FormacionService implements IFormacionService{
    @Autowired
    FormacionRepository formRepo;
    
    @Override
    public void crearFormacion(Formacion form) {
        formRepo.save(form);
    }

    @Override
    public void eliminarFormacion(Long id) {
        formRepo.deleteById(id);
    }

    @Override
    public boolean modificarFormacion(Formacion form) {
        if (formRepo.existsById(form.getId())){
            formRepo.save(form);
            return true;
        } 
        return false;
    }

    @Override
    public Formacion obtenerFormacion(Long id) {
        return formRepo.findById(id).orElseThrow(() -> new FormacionNotFoundException("¡La formacion no existe! No se pudo modificar. "));
    }

    @Override
    public List<Formacion> obtenerFormaciones() {
        return formRepo.findAll();
    }
    
}
