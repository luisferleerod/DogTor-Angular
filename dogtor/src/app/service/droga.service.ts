import { Injectable } from '@angular/core';
import { droga } from '../droga/droga';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<droga[]> {
    return this.http.get<droga[]>("http://localhost:8090/drogas/all");
  }
  
  masVendidas(): Observable<droga[]> {
    return this.http.get<droga[]>("http://localhost:8090/drogas/masVendidas");
  }

  totalVentas(): Observable<number> {
    return this.http.get<number>("http://localhost:8090/drogas/totalVentas");
  }
}
  