package learning.trail.securing.a.single.page.application;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Objects;

@Configuration
public class CrossOriginResourceSharingConfiguration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        Objects.requireNonNull(registry, "registry can not be null")
            .addMapping("/resources")
            .allowedOrigins("http://localhost:4200");
    }
}
