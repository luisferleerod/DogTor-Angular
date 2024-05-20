import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    console.log("Token de autenticación:", token); // Agregar registro de depuración
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      console.log("Solicitud con token de autenticación:", cloned); // Agregar registro de depuración
      console.log(cloned.headers.get('Authorization'));
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}

