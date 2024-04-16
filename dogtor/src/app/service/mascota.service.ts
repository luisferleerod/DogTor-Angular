import { Injectable } from '@angular/core';
import { mascota } from '../mascota/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente/cliente';

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
    if(mascota.cliente != null){
      console.log("recibiendo MASCOTA DESDE ACTUALIZAR MASCOTA COMPONENT"+mascota)
      console.log(mascota.id)
      console.log(mascota.nombre)
      console.log(mascota.enfermedad)
      console.log(mascota.estado)
      console.log(mascota.cliente.cedula)
  
  
      const data = {
        mascota: mascota,
        cliente: mascota.cliente
      };

      console.log("--------------------")
      console.log("DATA CLIENTE:")

      console.log(data.cliente.cedula)
      console.log(data.cliente.nombre)

      this.http.put("http://localhost:8090/mascotas/add", data).subscribe();
    // console.log("Agregando mascota en la bd")
    // console.log(mascota.id)
    // this.http.put<mascota>("http://localhost:8090/mascotas/add",mascota).subscribe();
    

  }
}

  actualizarMascota(mascota: mascota) {

  if(mascota.cliente != null){
    console.log("recibiendo MASCOTA DESDE ACTUALIZAR MASCOTA COMPONENT"+mascota)
    console.log(mascota.id)
    console.log(mascota.nombre)
    console.log(mascota.enfermedad)
    console.log(mascota.estado)
    console.log(mascota.cliente.cedula)


    const data = {
      mascota: mascota,
      cliente: mascota.cliente
    };
    
    this.http.put("http://localhost:8090/mascotas/update/"+mascota.id, data).subscribe();
    
    // this.http.put<mascota>("http://localhost:8090/mascotas/update/"+mascota.id, mascota).subscribe();

    // this.http.put<Cliente>("http://localhost:8090/cliente/update/"+mascota.cliente.id, mascota.cliente).subscribe();
  }

  else{
    console.log("CLIENTE NULOOOOO")
  }

}
  

  deleteById(id: number) {
    
    this.http.delete("http://localhost:8090/mascotas/delete/"+id).subscribe();
  }

  findCliente(id: Number): Observable<Cliente> {
    return this.http.get<Cliente>("http://localhost:8090/mascotas/cliente/"+id);
  }


}


