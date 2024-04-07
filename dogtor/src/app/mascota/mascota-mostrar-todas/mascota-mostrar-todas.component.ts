import { Component, EventEmitter, Output } from '@angular/core';
import { mascota } from '../mascota';


import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mascota-mostrar-todas',
  templateUrl: './mascota-mostrar-todas.component.html',
  styleUrls: ['./mascota-mostrar-todas.component.css']
})
export class MascotaMostrarTodasComponent {
  listaMascotas!: mascota[];

  //@Output() 
  //modificarMascotaEvent = new EventEmitter<mascota>();

  mascotaAct!: mascota;
  // Constructior es para inyectar dependencias

  constructor(private mascotaService: MascotaService, private route: ActivatedRoute, private router: Router) {
     
  }


  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => this.listaMascotas = mascotas, (error) => {
      
    })
  }


  // agregarMascota(mascota: mascota) {
  //   this.listaMascotas.push(mascota);
  //   this.agregarMascota(mascota);
  // }


  modificarMascota(mascota: mascota) {
    this.mascotaAct=Object.assign({},mascota);

  }



    /*
  actualizarMascota(mascota: mascota) {
    
    const index = this.listaMascotas.findIndex(m => m.id === mascota.id);

    this.listaMascotas[index] = Object.assign({},mascota);
    console.log("Actualizando mascota: " + mascota.id);
   
    this.modificarMascotaEvent.emit(mascota);

  }*/

  inactivarMascota(mascota: mascota) {
    const index = this.listaMascotas.findIndex(m => m.id === mascota.id);
    this.listaMascotas[index].estado = 'Inactivo';
  }
}
