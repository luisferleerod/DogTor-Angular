import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { veterinario } from '../veterinario/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) { }


  iniciarSesion(usuario: string, contrasena: string) {
    
    return this.http.get<veterinario>('http://localhost:8090/veterinario/iniciarSesionTrabajador/' + usuario + '/' + contrasena);
  }
}
