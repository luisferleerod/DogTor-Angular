import { Component, EventEmitter, Output } from '@angular/core';
import { mascota } from '../mascota';

import { ClienteService } from 'src/app/service/cliente.service';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascota-mostrar-todas',
  templateUrl: './mascota-mostrar-todas.component.html',
  styleUrls: ['./mascota-mostrar-todas.component.css']
})
export class MascotaMostrarTodasComponent {
  listaMascotas!: mascota[];

  @Output() 
  modificarMascotaEvent = new EventEmitter<mascota>();

  mascotaAct!: mascota;
  // Constructior es para inyectar dependencias


  agregarMascota(mascota: mascota) {
    this.listaMascotas.push(mascota);
    this.agregarMascota(mascota);
  }


  modificarMascota(mascota: mascota) {
    this.mascotaAct=Object.assign({},mascota);

  }

   // const index = this.listaMascotas.findIndex(m => m.id === mascota.id);
    // console.log("Actualizando mascota: " + mascota.id);

    // this.listaMascotas[index] = Object.assign({},mascota);
  actualizarMascota(mascota: mascota) {
   
    this.modificarMascotaEvent.emit(mascota);

  }

  inactivarMascota(mascota: mascota) {
    const index = this.listaMascotas.findIndex(m => m.id === mascota.id);
    this.listaMascotas[index].estado = 'Inactivo';
  }



}
