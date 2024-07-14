import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from "@angular/common/http";
import {routes} from './app.routes';
import {XhrInterceptor} from "./xhr.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}]
};
