import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { veterinario } from '../veterinario/veterinario';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private veterinario!: veterinario;
  private veterinarioSubject = new Subject<veterinario>();

  constructor(private http: HttpClient) { }

  setVeterinario(veterinario: veterinario) {
    this.veterinario = veterinario;
    this.veterinarioSubject.next(this.veterinario);
  }

  getVeterinario() {
    return this.veterinario;
  }

  getVeterinarioObservable() {
    return this.veterinarioSubject.asObservable();
  }


  iniciarSesion(usuario: string, contrasena: string) {
    
    return this.http.get<veterinario>('http://localhost:8090/veterinario/iniciarSesionTrabajador/' + usuario + '/' + contrasena);
  }

  findAll(): Observable<veterinario[]> {
    return this.http.get<veterinario[]>("http://localhost:8090/veterinario/all");
  }

  agregarVeterinario(veterinario: veterinario) {
    this.http.put<veterinario>("http://localhost:8090/veterinario/add",veterinario).subscribe();
  }

  findById(id: number): Observable<veterinario> {
    return this.http.get<veterinario>("http://localhost:8090/veterinario/find/"+id);
  
  }

}
