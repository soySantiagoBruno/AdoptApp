package com.AdoptApp.AdoptApp.controller;

import com.AdoptApp.AdoptApp.dto.auth.AuthenticationRequest;
import com.AdoptApp.AdoptApp.dto.auth.AuthenticationResponse;
import com.AdoptApp.AdoptApp.entity.Usuario;
import com.AdoptApp.AdoptApp.servis.auth.AuthenticateServicis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    AuthenticateServicis authenticateServicis;
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse>authentication(@RequestBody AuthenticationRequest request){
        AuthenticationResponse response=authenticateServicis.login(request);
        return ResponseEntity.ok(response);


    }
    @GetMapping("/profiles")
    public ResponseEntity<Usuario>MyProfils(){
        Usuario user=authenticateServicis.findLogginInUser();
        return ResponseEntity.ok(user);


    }

}
