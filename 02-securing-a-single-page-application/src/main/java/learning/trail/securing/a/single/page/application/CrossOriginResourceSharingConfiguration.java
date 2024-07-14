package learning.trail.securing.a.single.page.application;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Objects;

@Configuration
public class CrossOriginResourceSharingConfiguration implements WebMvcConfigurer {
    private static final String APPLICATION_HOST = "http://localhost:4200";

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        Objects.requireNonNull(registry, "registry can not be null")
            .addMapping("/resources")
            .allowedOrigins(APPLICATION_HOST);
        registry.addMapping("/users")
            .allowedOrigins(APPLICATION_HOST);
        registry.addMapping("/logout")
            .allowedOrigins(APPLICATION_HOST);
    }
}
