package com.AdoptApp.AdoptApp.controller;

import com.AdoptApp.AdoptApp.servis.auth.AuthenticateServicis;
import com.AdoptApp.AdoptApp.dto.RegistrarUsuario;
import com.AdoptApp.AdoptApp.dto.SaveUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioControlador {

    @Autowired
    private AuthenticateServicis authenticateServicis;
    @PostMapping("/registrar")
    public ResponseEntity<RegistrarUsuario> registrarUsuario(@RequestBody SaveUsuario newUser) throws Exception {

        RegistrarUsuario usuarioRegistrado= authenticateServicis.registerOneCustomer(newUser);
        return  ResponseEntity.status(HttpStatus.CREATED).body(usuarioRegistrado);

    }
}
