import { Injectable } from '@angular/core';
import { administrador } from '../administrador/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor() { }
  listaAdministradores: administrador[] = [

    {
      id: 1,
      usuario: 'admin',
      nombre: 'admin',
      contrasena: 'admin'
    }
 ]

}
