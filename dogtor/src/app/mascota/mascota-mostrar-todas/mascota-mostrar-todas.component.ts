import { Component } from '@angular/core';
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

  mascotaAct!: mascota;
  // Constructior es para inyectar dependencias
  constructor(private mascotaService: MascotaService) {
    
  }

  // Llamado cuando ya esta cargada la interfaz
  ngOnInit(): void {
    this.listaMascotas = this.mascotaService.findAll();
  }

  agregarMascota(mascota: mascota) {
    this.listaMascotas.push(mascota);
  }


  modificarMascota(mascota: mascota) {
    this.mascotaAct=Object.assign({},mascota);

  }

  actualizarMascota(mascota: mascota) {
    const index = this.listaMascotas.findIndex(m => m.id === mascota.id);

    this.listaMascotas[index] = Object.assign({},mascota);
  }

  inactivarMascota(mascota: mascota) {
    const index = this.listaMascotas.findIndex(m => m.id === mascota.id);
    this.listaMascotas[index].estado = 'Inactivo';
  }



}
