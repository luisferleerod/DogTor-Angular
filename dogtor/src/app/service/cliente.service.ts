import { Injectable } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
      

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:8090/cliente/all");
  }

  findByCedula(cedula: String): Observable<Cliente> {
    console.log("recibiendo CEDULA DESDE FIND BY CEDULA CLIENTE SERVICE"+cedula)
    return this.http.get<Cliente>("http://localhost:8090/cliente/find/"+cedula);
  
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>("http://localhost:8090/cliente/find/"+id);
  
  }

  actualizarCliente(cliente: Cliente) {
    console.log("recibiendo CLIENTE DESDE ACTUALIZAR CLIENTE COMPONENT"+cliente)
    console.log(cliente.cedula)
    console.log(cliente.nombre)

    this.http.put<Cliente>("http://localhost:8090/cliente/update/"+cliente.id, cliente).subscribe();
  }

  iniciarSesion(cliente: string) {
    return this.http.get<Cliente>('http://localhost:8090/cliente/inicioSesion/' + cliente);
  }

  agregarCliente(cliente: Cliente) {
    this.http.put<Cliente>("http://localhost:8090/cliente/add",cliente).subscribe();
  }
}

  

  

