import { Injectable } from '@angular/core';
import { administrador } from '../administrador/administrador';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  constructor(private http: HttpClient) { }

  /*iniciarSesion(usuario: string, contrasena: string) {
    
    return this.http.get<administrador>('http://localhost:8090/administrador/iniciarSesionTrabajador/' + usuario + '/' + contrasena);
  }*/

  iniciarSesion(user: User): Observable<String> {
    return this.http.post('http://localhost:8090/administrador/inicioSesion' , user,{
      responseType: 'text'
    });
  }

  getAdmin(): Observable<administrador[]>{
    return this.http.get<administrador[]>('http://localhost:8090/administrador/all');
  }

  adminHome(): Observable<administrador> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  return this.http.get<administrador>('http://localhost:8090/administrador/details', { headers });
  }
}
