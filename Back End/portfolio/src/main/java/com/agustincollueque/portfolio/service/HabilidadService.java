package com.agustincollueque.portfolio.service;

import com.agustincollueque.portfolio.exception.HabilidadNotFoundException;
import com.agustincollueque.portfolio.model.Habilidad;
import com.agustincollueque.portfolio.repository.HabilidadRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabilidadService implements IHabilidadService {
    @Autowired
    HabilidadRepository habRepo;

    @Override
    public void crearHabilidad(Habilidad hab) {
        habRepo.save(hab);
    }

    @Override
    public void eliminarHabilidad(Long id) {
        habRepo.deleteById(id);
    }

    @Override
    public void modificarHabilidad(Habilidad hab) {
        if (habRepo.existsById(hab.getId())) {
            habRepo.save(hab);
        } else {
            throw new HabilidadNotFoundException("¡La habilidad no existe! No se puede modificar.");
        }
    }

    @Override
    public Habilidad obtenerHabilidad(Long id) {
        return habRepo.findById(id).orElseThrow(() -> new HabilidadNotFoundException("¡La habilidad no existe!"));
    }

    @Override
    public List<Habilidad> obtenerHabilidades() {
        return habRepo.findAll();
    }
}
