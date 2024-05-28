package com.AdoptApp.AdoptApp.dto.auth;

import lombok.Data;

@Data
public class AuthenticationResponse {
    private String userName;
    private String rol;
    private String jwt;
    private String email;
    private String localidad;
}
