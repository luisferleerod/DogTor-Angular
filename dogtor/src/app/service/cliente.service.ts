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
    return this.http.get<Cliente[]>("http://localhost:8090/dueno/all");
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>("http://localhost:8090/dueno/find/"+id);
  
  }

}

  

  

