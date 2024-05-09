# Securing a Web Application
This module creates a simple web application with resources that are protected by Spring Security. We build a Spring 
MVC application that secures the page with a login form that is backed by a fixed list of users.

--- 

> ## Implementation Notes
> * If Spring Security is on the classpath, Spring Boot automatically secures all HTTP endpoints with “basic” 
authentication. However, you can further customize the security settings.
> * The `SecurityFilterChain` bean defines which URL paths should be secured and which should not.
> * Spring Security provides a filter that intercepts that request and authenticates the user. If the user fails to 
authenticate, the page is redirected to `/login?error`, and your page displays the appropriate error message.
> * Upon successfully signing out, the application is sent to `/login?logout`, and the page displays the appropriate 
success message.

--- 

#### How to Build the Application
```bash
./mvnw clean package
```

#### How to Run the Application
```bash
./mvnw spring-boot:run
```
OR

```bash
java -jar target/01-securing-a-web-application-0.0.1.jar
```

---

| Source            | URL                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------|
| Guide             | [Securing a Web Application](https://spring.io/guides/gs/securing-web)                         |
| GitHub Repository | [gs-securing-web](https://github.com/spring-guides/gs-securing-web/blob/main/complete/pom.xml) |
