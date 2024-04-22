import { Injectable } from '@angular/core';
import { administrador } from '../administrador/administrador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: string, contrasena: string) {
    
    return this.http.get<administrador>('http://localhost:8090/administrador/iniciarSesionTrabajador/' + usuario + '/' + contrasena);
  }

  getAdmin(): Observable<administrador[]>{
    return this.http.get<administrador[]>('http://localhost:8090/administrador/all');
  }

}
