package com.AdoptApp.AdoptApp.servis.impl;

import com.AdoptApp.AdoptApp.entity.Mascota;
import com.AdoptApp.AdoptApp.repository.MascotaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MascotaService {

    @Autowired
    private MascotaRepositorio mascotaRepositorio;

    public Mascota registrarMascota(Mascota mascotaNueva){
        mascotaRepositorio.save(mascotaNueva);
        return mascotaNueva;
    }

    public List<Mascota> listarMascotas(){
        return mascotaRepositorio.findAll();
    }

    // Método para filtrar mascotas por tipo
    public List<Mascota> buscarPorPropiedades(String tipo, String sexo, Long tamanio, String ubicacion) {
        return mascotaRepositorio.findByTipoAndSexoAndTamanioAndUbicacion(tipo, sexo, tamanio, ubicacion);
    }
}
