package learning.trail.securing.a.single.page.application;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/users")
public class PrincipalRestController {
    @GetMapping
    Principal getPrincipal(Principal principal) {
        return principal;
    }
}
