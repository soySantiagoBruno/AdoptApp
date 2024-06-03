package com.AdoptApp.AdoptApp.controller;

import com.AdoptApp.AdoptApp.dto.RegistrarUsuario;
import com.AdoptApp.AdoptApp.dto.SaveUsuario;
import com.AdoptApp.AdoptApp.entity.Mascota;
import com.AdoptApp.AdoptApp.servis.impl.MascotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("mascota")
public class MascotaControlador {

    @Autowired
    MascotaService mascotaService;

    @PostMapping("/registrar")
    public ResponseEntity<Mascota> registrarMascota(@RequestBody Mascota nuevaMascota) throws Exception {
        mascotaService.registrarMascota(nuevaMascota);
        return  ResponseEntity.status(HttpStatus.CREATED).body(nuevaMascota);
    }

    @GetMapping("/listar")
    public List<Mascota> listarMascotas(){
        return mascotaService.listarMascotas();
    }

    @GetMapping("/buscarPorPropiedades")
    public List<Mascota> buscarMascotasPorPropiedades(
            @RequestParam String tipo,
            @RequestParam String sexo,
            @RequestParam Long tamanio,
            @RequestParam String ubicacion
    ) {
        return mascotaService.buscarPorPropiedades(tipo, sexo, tamanio, ubicacion);
    }


    @GetMapping("/hola")
    public String hola(){
        return "hola mundo!";
    }
}
