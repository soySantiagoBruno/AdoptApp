package com.AdoptApp.AdoptApp.repository;

import com.AdoptApp.AdoptApp.entity.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface MascotaRepositorio extends JpaRepository<Mascota, Long> {

    // Método para filtrar mascotas por tipo, sexo, tamaño y ubicación combinados
    List<Mascota> findByTipoAndSexoAndTamanioAndUbicacion(String tipo, String sexo, Long tamanio, String ubicacion);
}
