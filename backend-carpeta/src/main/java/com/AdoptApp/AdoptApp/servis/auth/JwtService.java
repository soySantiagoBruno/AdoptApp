package com.AdoptApp.AdoptApp.servis.auth;

import com.AdoptApp.AdoptApp.entity.Usuario;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {
    @Value("${security.jwt.secret_key}")
    private String SECRETE_KEY;

    @Value("${security.jwt.expiration_in_minutes}")
    private Long EXPIRATION_IN_MINUTES;

    public String generarToken(UserDetails user, Map<String,Object> extraClamis) {
        Date issuedAt=new Date(System.currentTimeMillis());
        Date expiration=new Date((EXPIRATION_IN_MINUTES*60*1000)+issuedAt.getTime());

        String jwt= Jwts.builder()
                .header()
                .type("JWT")
                .and()
                .claims(extraClamis)
                .subject(user.getUsername())
                .issuedAt(issuedAt)
                .expiration(expiration)
                .signWith(generateKey(),Jwts.SIG.HS256)
                .compact();

        return   jwt;
    }
    private SecretKey generateKey(){
        byte[] passwordDecorder= Decoders.BASE64.decode(SECRETE_KEY);

        return Keys.hmacShaKeyFor(passwordDecorder);

    }


// Esta funcin la deja aca por si la quieren usar, es para obtener datos mediante un jwt
    public String extracUsuarioConJwt(String jwt){

        return extracAllclaims(jwt).getSubject();

    }

    private Claims extracAllclaims(String jwt) {

        return Jwts.parser().verifyWith(generateKey()).build()
                .parseSignedClaims(jwt).getPayload();
    }



}


