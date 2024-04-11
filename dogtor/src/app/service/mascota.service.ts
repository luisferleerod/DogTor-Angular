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
    console.log("Agregando mascota en la bd")
    console.log(mascota.id)
    this.http.put<mascota>("http://localhost:8090/mascotas/add",mascota).subscribe();
    

  }

  actualizarMascota(mascota: mascota) {
    console.log("recibiendo MASCOTA DESDE ACTUALIZAR MASCOTA COMPONENT"+mascota)
    console.log(mascota.id)
    console.log(mascota.nombre)
    console.log(mascota.enfermedad)
    console.log(mascota.estado)
    this.http.put<mascota>("http://localhost:8090/mascotas/update/"+mascota.id, mascota).subscribe();
  }
  

  deleteById(id: number) {
    
    this.http.delete("http://localhost:8090/mascotas/delete/"+id).subscribe();
  }
}


