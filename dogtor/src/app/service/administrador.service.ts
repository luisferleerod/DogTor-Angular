import { Injectable } from '@angular/core';
import { administrador } from '../administrador/administrador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: string, contrasena: string) {
    
    return this.http.get<administrador>('http://localhost:8090/administrador/iniciarSesionTrabajador/' + usuario + '/' + contrasena);
  }

}
