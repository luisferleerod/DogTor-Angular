import { Component } from '@angular/core';
import { administrador } from './administrador';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
 listaAdministradores: administrador[] = [

    {
      id: 1,
      usuario: 'admin',
      nombre: 'admin',
      contrasena: 'admin'
    }
 ]
}
