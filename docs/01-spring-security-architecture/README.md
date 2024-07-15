# Spring Security Architecture Series

Spring Security is investigated in this series in terms of `Authentication`, `Authorization`, `Web Security`, 
`Customizations`, `Method Security` and `Threads`.

> This work is suitable for an engineering community which is constituted of an audience who is familiar with 
> the `Spring Framework` and its derivative `Spring-Boot` Platform.

--- 

## Outlines

Here we have a list of topics we issued through the series. All materials are related to `v1.0` unless it is 
said otherwise. 

1. [Authentication and Authorization](./v1.0/01-authentication-and-authorization.pdf) 
    * Authentication and Authorization 
2. [Authentication](./v1.0/02-authentication.pdf)
	* AuthenticationManager
	* ProviderManager – I
	* ProviderManager – II
	* AuthenticationManagerBuilder
	* Application that configures the global (parent) AuthenticationManager
	* Application that configures the local AuthenticationManager
3. [Authorization](./v1.0/03-authorization.pdf)
    * AccessDecisionManager
    * AccessDecisionVoter
    * ConfigAttribute
4. [Servlet Filters and Chains](./v1.0/04-servlet-filters-and-chains-outline.pdf)
    * Servlet Filters
    * Order of the Filter Chain - I 
    * Order of the Filter Chain – II
    * FilterChainProxy – I
    * FilterChainProxy – II
    * FilterChainProxy – III
    * DelegatingFilterProxy
    * SecurityFilterChain
5. [Web Security](./v1.0/05-web-security.pdf)
    * WebSecurityConfiguration
    * WebSecurity – I
    * WebSecurity – II
    * WebSecurity – III
    * WebSecurityConfigurerAdapter
    * WebSecurityConfigurer
    * SecurityConfigurer
6. [Customizations](./v1.0/06-customizations.pdf)
    * Dispatching Requests to the First Chain That Matches
    * Configuration of Filter Chains
    * Creating and Customizing Filter Chains - I
    * Creating and Customizing Filter Chains – II
    * Request Matching for Dispatch and Authorization
    * Combining Application Security Rules with Actuator Rules 
7. [Method Security](./v1.0/07-method-security.pdf)
    * Method Security
8. [Working with Threads](./v1.0/08-working-with-threads.pdf)
    * SecurityContext – I
   * SecurityContext – II
   * AuthenticationPrincipal
   * Authentication
   * Principal
   * Processing Secure Methods Asynchronously
   * AsyncConfigurerSupport
   * AsyncConfigurer
