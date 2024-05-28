package com.AdoptApp.AdoptApp.controller;

import com.AdoptApp.AdoptApp.entity.Usuario;
import com.AdoptApp.AdoptApp.repository.UsuarioRepositorio;
import com.AdoptApp.AdoptApp.servis.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminControlador {
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;
    @GetMapping("/listarUsuarios")
    public ResponseEntity<List<Usuario>>listarUsuarios(){

        return ResponseEntity.ok(usuarioRepositorio.findAll());

    }
}
