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

    findAll(): Observable<tratamiento[]> {
        return this.http.get<tratamiento[]>("http://localhost:8090/tratamiento/all");
      }

    addTratamiento(tratamiento: tratamiento) {
        
        //this.http.put<tratamiento>("http://localhost:8090/tratamiento/add",tratamiento).subscribe();


        const data = {
          mascota: tratamiento.mascota,
          veterinario: tratamiento.veterinario,
          tratamiento: tratamiento,
          droga: tratamiento.droga?.id
        };
        console.log("PRUEBA")
        console.log(data.droga)

        this.http.put("http://localhost:8090/tratamiento/add", data).subscribe();
    }
}