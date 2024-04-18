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
  toggleText: string = 'Mascotas'; // Agrega esta variable

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

  modificarMascota(mascota: mascota) {
    this.mascotaAct=Object.assign({},mascota);

  }

  inactivarMascota(mascota: mascota) {
    this.mascotaService.deleteById(mascota.id);

     const index = this.listaMascotas.findIndex(m => m.id === mascota.id);
     this.listaMascotas[index].estado = 'inactivo';
  }


  toggleSlide(event: Event) {
    event.stopPropagation(); // Evita que el evento se propague
    this.toggleText = this.toggleText === 'Mascotas' ? 'Clientes' : 'Mascotas';
  }
  
  
  
  
}
