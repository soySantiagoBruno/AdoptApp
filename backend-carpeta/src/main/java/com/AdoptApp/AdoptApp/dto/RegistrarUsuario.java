package com.AdoptApp.AdoptApp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrarUsuario {
    private String id;
    private String email;
    private String nombre;
    private String rol;
    private String jwt;
}
