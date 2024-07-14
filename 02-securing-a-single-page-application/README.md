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
> * It's essential to run the `add_bootstrap.sh` (under the `src/main/frontend` path) script to add Twitter's `Bootstrap` library which will make the web project look more fancy. You have to run it just after the application build is completed.

---

#### How to Run the Angular Application at the Frontend
```bash
ng serve
```
To see other details about frontend application, please pay a visit to its own [README](./src/main/frontend/README.md) file.

#### How to Build the Java Application at the Backend
```bash
./mvnw clean package
```

#### How to Run the Java Application at the Backend
```bash
./mvnw spring-boot:run
```
OR

```bash
java -jar target/02-securing-a-single-page-application-0.0.1.jar
```

OR here is my **favorite** one:

```bash
./mvnw clean compile spring-boot:run --projects 02-securing-a-single-page-application
```

---

## Sources
**Spring Security and Angular** - `Guide`
> * _A tutorial on how to use Spring Security with a single page application with various backend architectures, ranging from a simple single server to an API gateway with OAuth2 authentication._
> * [Source](https://spring.io/guides/tutorials/spring-security-and-angular-js) 

> * Spring Security and Angular - `GitHub Repository`
> * [Source](https://github.com/spring-guides/tut-spring-security-and-angular-js/tree/main)

**Creating a New Application with Spring Boot and Angular** - `Tutorial`
> * _Quick tutorial on how to create a Spring Boot app with Angular front end using Maven and modern front end tooling._                                                                     
> * [Source](https://github.com/dsyer/spring-boot-angular)

**Eirik Sletteberg's Maven Front-end Plugin** - `GitHub Repository`
> * _A plugin which downloads and installs Node and NPM locally for your project, runs `npm install`, and then any combination of Bower, Grunt, Gulp, Jspm, Karma, or Webpack._        
> * [Source](https://github.com/eirslett/frontend-maven-plugin)         

**Enabling Cross Origin Requests for a RESTful Web Service** - `Guide`
> * _This guide walks you through the process of creating a “Hello, World” RESTful web service with Spring that includes headers for Cross-Origin Resource Sharing (CORS) in the response._
> * [Source](https://spring.io/guides/gs/rest-service-cors)

