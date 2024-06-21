package learning.trail.securing.a.single.page.application;

import lombok.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("resources")
public class SimpleResourceRestController {
    @GetMapping
    ResponseEntity<SimpleResource> getSimpleResource() {
        return ResponseEntity.ok(SimpleResource.of(UUID.randomUUID(), "Here is my simple resource!"));
    }

    @Value(staticConstructor = "of")
    private static class SimpleResource {
        UUID id;
        String content;
    }
}
