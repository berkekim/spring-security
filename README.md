# spring-security
Spring Security is a powerful and highly customizable authentication and access-control framework. Spring Security is a framework that focuses on providing both authentication and authorization to Java applications. 

---

## Modules
1. [Securing a Web Application](#securing-a-web-application)

--- 

### Securing a Web Application
This module creates a simple web application with resources that are protected by Spring Security. We build a Spring 
MVC application that secures the page with a login form that is backed by a fixed list of users.

> #### Implementation Notes
> * If Spring Security is on the classpath, Spring Boot automatically secures all HTTP endpoints with “basic” 
authentication. However, you can further customize the security settings.
> * The `SecurityFilterChain` bean defines which URL paths should be secured and which should not.
> * Spring Security provides a filter that intercepts that request and authenticates the user. If the user fails to 
authenticate, the page is redirected to `/login?error`, and your page displays the appropriate error message.
> * Upon successfully signing out, the application is sent to /login?logout, and the page displays the appropriate
x6success message.

| Source            | URL                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------|
| Guide             | [Securing a Web Application](https://spring.io/guides/gs/securing-web)                         |
| GitHub Repository | [gs-securing-web](https://github.com/spring-guides/gs-securing-web/blob/main/complete/pom.xml) |

---
