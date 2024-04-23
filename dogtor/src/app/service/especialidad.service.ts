import { Injectable } from '@angular/core';
import { especialidad } from '../especialidad/especialidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<especialidad[]> {
    return this.http.get<especialidad[]>("http://localhost:8090/especialidad/all");
  }

}
