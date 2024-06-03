package com.AdoptApp.AdoptApp.config.security;

import com.AdoptApp.AdoptApp.config.security.filter.JwtAutheticateFilter;
import com.AdoptApp.AdoptApp.enums.Rol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class HttpSecurityConfig {

    @Autowired
    private AuthenticationProvider daoAuthenticationProvider;

    @Autowired
    private JwtAutheticateFilter jwtAutheticateFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        SecurityFilterChain filterChain = http
                .cors(Customizer.withDefaults())
                .csrf(csrfConfig -> csrfConfig.disable())
                .sessionManagement(sessionMagConfigCon -> sessionMagConfigCon.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(daoAuthenticationProvider)
                .addFilterAfter(jwtAutheticateFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests(authRequestConfig -> {

                    /*EndPoints que se necesita autorizacion y rol especificos*/
                    authRequestConfig.requestMatchers(HttpMethod.GET, "/admin/listarUsuarios").hasRole(Rol.ADMINISTRADOR.name());



                    /*EndPoint Publicos*/
                    authRequestConfig.requestMatchers(HttpMethod.POST, "/usuario/registrar").permitAll();
                    authRequestConfig.requestMatchers(HttpMethod.POST, "/auth/login").permitAll();
                    // dejenlo por si lo necesitamos -> authRequestConfig.requestMatchers(HttpMethod.GET, "/auth/validate").permitAll();
                    authRequestConfig.requestMatchers(HttpMethod.GET, "/portal/mascotas/{id}").permitAll();

                    /* Mascota*/
                    //A futuro esto debería limitado a usuarios(?
                    authRequestConfig.requestMatchers(HttpMethod.POST, "/mascota/registrar").permitAll();

                    authRequestConfig.requestMatchers(HttpMethod.GET, "/mascota/listar").permitAll();
                    authRequestConfig.requestMatchers(HttpMethod.GET, "/mascota/hola").permitAll();


                    /* Metodos que necesitan auth bearToken
                    /auth/profiles   -> es para obtener toda info del usuario que se encuentra logueado

                    * */

                    /* Importante!
                    Debe ser la última regla en la cadena de autorización. Esto significa que una vez que se ha llamado a anyRequest(), no se pueden configurar más requestMatchers*/
                    authRequestConfig.anyRequest().authenticated();

                }).build();
        return filterChain;
    }
@Profile("dev")
    @Bean
    CorsConfigurationSource defaultCorsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Profile("docker")
    @Bean
    CorsConfigurationSource dockerCorsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:5173");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

}
