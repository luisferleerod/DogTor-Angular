import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tratamiento } from "../tratamiento/tratamiento";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

export class TratamientoService {
    constructor(private http: HttpClient) { }

    findByMascota(id: number): Observable<any>{
        
        return this.http.get<any>(`http://localhost:8090/tratamiento/mascota/`+id);
    }
}