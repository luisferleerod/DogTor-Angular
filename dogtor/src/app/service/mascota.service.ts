import { Injectable } from '@angular/core';
import { mascota } from '../mascota/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }


  findAll(): Observable<mascota[]> {
    return this.http.get<mascota[]>("http://localhost:8090/mascotas/all");

  }

  findById(id: number): Observable<mascota> {
    return this.http.get<mascota>("http://localhost:8090/mascotas/find/"+id);
  
  }

  agregarMascota(mascota: mascota) {
    this.http.post<mascota>("http://localhost:8090/mascotas/add",mascota).subscribe();
    console.log("Agregando mascota en la bd")

  }

  actualizarMascota(mascota: mascota) {

    
  }

  deleteById(id: number) {
    this.http.delete("http://localhost:8090/mascotas/delete/"+id).subscribe();
  }
}


