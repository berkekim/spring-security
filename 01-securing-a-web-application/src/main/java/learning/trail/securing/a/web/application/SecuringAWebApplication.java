package learning.trail.securing.a.web.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
@EnableWebSecurity
public class SecuringAWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(SecuringAWebApplication.class, args);
    }
}
