package com.treelogic.framework.config;

import com.treelogic.framework.security.JwtAuthFilter;
import com.treelogic.framework.security.JwtAuthenticationEntryPoint;
import com.treelogic.framework.security.JwtAuthenticationProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthFilter jwtAuthFilter;
    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthEndPoint;
    @Autowired
    private JwtAuthenticationProvider jwtAuthenticationProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().ignoringAntMatchers("/login");

        http
            .authorizeRequests()
            .antMatchers("/login")
            .permitAll()
            .antMatchers("/**/*")
            .hasAuthority("ROLE_USER")
            .and()
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling()
            .authenticationEntryPoint(jwtAuthEndPoint);
    }

    @Override
    public void configure(AuthenticationManagerBuilder authBuilder) throws Exception {
        authBuilder.authenticationProvider(jwtAuthenticationProvider);
    }
}
