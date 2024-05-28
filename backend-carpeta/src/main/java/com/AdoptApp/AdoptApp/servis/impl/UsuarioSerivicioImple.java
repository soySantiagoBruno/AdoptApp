package com.AdoptApp.AdoptApp.servis.impl;

import com.AdoptApp.AdoptApp.dto.SaveUsuario;
import com.AdoptApp.AdoptApp.entity.Usuario;
import com.AdoptApp.AdoptApp.enums.Rol;
import com.AdoptApp.AdoptApp.repository.UsuarioRepositorio;
import com.AdoptApp.AdoptApp.servis.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioSerivicioImple  implements UsuarioServicio {
@Autowired
private UsuarioRepositorio usuarioRepositorio;

@Autowired
private PasswordEncoder passwordEncoder;


    private void validarPassword(SaveUsuario newUser) throws Exception {
        if (newUser.getPassword().isEmpty() || newUser.getRepeatePassword().isEmpty()) {
            throw new Exception("PASSWORD VACIA");
        } else if (!newUser.getPassword().equals(newUser.getRepeatePassword())) {
            throw new Exception("LOS PASSWORD NO SON IGUALES");
        }
    }

    @Override
    public Usuario registarUsuario(SaveUsuario newUser) throws Exception {
        validarPassword(newUser);
        Usuario usuario=new Usuario();
        usuario.setEmail(newUser.getEmail());
        usuario.setNombre(newUser.getNombre());
        usuario.setLocalidad(newUser.getLocalidad());
        usuario.setPassword(passwordEncoder.encode(newUser.getPassword()));
        usuario.setRol(Rol.USUARIO);
        return usuarioRepositorio.save(usuario);
    }

    @Override
    public Optional<Usuario> findByEmail(String email) {
        return usuarioRepositorio.findByEmail(email);
    }


}
