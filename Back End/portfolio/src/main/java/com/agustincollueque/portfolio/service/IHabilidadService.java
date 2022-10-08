package com.agustincollueque.portfolio.service;

import com.agustincollueque.portfolio.model.Habilidad;
import java.util.List;

public interface IHabilidadService {
    public void crearHabilidad(Habilidad hab);
    public void eliminarHabilidad(Long id);
    public void modificarHabilidad(Habilidad hab);
    public Habilidad obtenerHabilidad(Long id);
    public List<Habilidad> obtenerHabilidades();
}
