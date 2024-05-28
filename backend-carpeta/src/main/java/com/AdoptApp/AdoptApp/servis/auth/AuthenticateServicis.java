package com.AdoptApp.AdoptApp.servis.auth;

import com.AdoptApp.AdoptApp.dto.auth.AuthenticationRequest;
import com.AdoptApp.AdoptApp.dto.auth.AuthenticationResponse;
import com.AdoptApp.AdoptApp.dto.RegistrarUsuario;
import com.AdoptApp.AdoptApp.dto.SaveUsuario;
import com.AdoptApp.AdoptApp.entity.Usuario;
import com.AdoptApp.AdoptApp.servis.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticateServicis {

    @Autowired
    private UsuarioServicio usuarioServicio;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    public RegistrarUsuario registerOneCustomer(SaveUsuario newUser) throws Exception {
        Usuario usuario=usuarioServicio.registarUsuario(newUser);
        RegistrarUsuario usuarioDto=new RegistrarUsuario();
        usuarioDto.setId(usuario.getId());
        usuarioDto.setNombre(usuario.getNombre());
        usuarioDto.setEmail(usuario.getEmail());
        usuarioDto.setRol(usuario.getRol().name());

        String jwt=jwtService.generarToken(usuario,generateExtraClaims(usuario));
        usuarioDto.setJwt(jwt);
        return usuarioDto;
    }
    private Map<String, Object> generateExtraClaims(Usuario user) {
        Map<String,Object>extraClaims=new HashMap<>();
        extraClaims.put("nombre",user.getNombre());
        extraClaims.put("rol",user.getRol().name());
        extraClaims.put("localidad",user.getLocalidad());
        extraClaims.put("email",user.getEmail());

        return extraClaims;

    }

    public AuthenticationResponse login(AuthenticationRequest request) {
        Authentication authentication=new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword());
        authenticationManager.authenticate(authentication);
        UserDetails usuario= usuarioServicio.findByEmail(request.getEmail()).get();
        String jwt=jwtService.generarToken(usuario,generateExtraClaims((Usuario) usuario));
        AuthenticationResponse authResponde=new  AuthenticationResponse();
        authResponde.setJwt(jwt);
        authResponde.setUserName(((Usuario) usuario).getNombre());
        authResponde.setRol(((Usuario) usuario).getRol().name());
        authResponde.setEmail(((Usuario) usuario).getEmail());

        return authResponde;
    }

    public Usuario findLogginInUser() {
        /*aca basicamente tengo que obtener el usuarui del securutyContextHolder*/
        UsernamePasswordAuthenticationToken auth= (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        String user= (String) auth.getPrincipal();
        return usuarioServicio.findByEmail(user).orElseThrow(()-> new UsernameNotFoundException("usuario no funciona email:"+user));
    }
}
