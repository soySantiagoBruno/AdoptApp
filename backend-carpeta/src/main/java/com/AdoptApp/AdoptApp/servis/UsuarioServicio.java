package com.AdoptApp.AdoptApp.servis;

import com.AdoptApp.AdoptApp.dto.SaveUsuario;
import com.AdoptApp.AdoptApp.entity.Usuario;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;


public interface UsuarioServicio {
    public Usuario registarUsuario(SaveUsuario newUser) throws Exception;


    Optional<Usuario>findByEmail(String email);

}
