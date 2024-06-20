# Securing a Single Page Application
This module creates a single page application with resources that are protected by Spring Security.

HTML5, rich browser-based features, and the `single page application` are extremely valuable tools 
for modern developers, but any meaningful interactions will involve a backend server, so as well as
static content (HTML, CSS and JavaScript) we are going to need a backend server. The backend server 
can play any or all of a number of roles: serving static content, sometimes (but not so often these
days) rendering dynamic HTML, authenticating users, securing access to protected resources, and
(last but not least) interacting with JavaScript in the browser through HTTP and JSON (sometimes 
referred to as a REST API).

--- 

> ## Implementation Notes
> * TBD

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
java -jar target/02-securing-a-single-page-application-0.0.1.jar
```

---

| Source                                                                                                            | URL                                                                                                     |
|:------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|
| Guide                                                                                                             | [Spring Security and Angular](https://spring.io/guides/tutorials/spring-security-and-angular-js)        |
| GitHub Repository                                                                                                 | [gs-securing-web](https://github.com/spring-guides/tut-spring-security-and-angular-js/tree/main)        |
| Quick tutorial on how to create a Spring Boot app with Angular front end using Maven and modern front end tooling | [Creating a New Application with Spring Boot and Angular](https://github.com/dsyer/spring-boot-angular) |
