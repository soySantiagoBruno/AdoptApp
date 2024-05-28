package com.AdoptApp.AdoptApp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaveUsuario {
    private String nombre;
    private String email;
    private String password;
    private String repeatePassword;
    private String localidad;
}
