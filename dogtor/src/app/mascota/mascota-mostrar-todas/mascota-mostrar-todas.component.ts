import { Component, EventEmitter, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { veterinario } from 'src/app/veterinario/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

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

  veterinario!: veterinario;
  searchTerm: any;

  constructor(private mascotaService: MascotaService, private route: ActivatedRoute, private router: Router, private veterinarioService: VeterinarioService) {
  }

  ngOnInit(): void {
    //this.veterinario = this.veterinarioService.getVeterinario();
    this.veterinarioService.veterinarioHome().subscribe((data) => {
      //this.listaadmin = data;
      //this.admin = this.listaadmin[0];
      this.veterinario = data;
      console.log(this.veterinario);
    });

    

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

    // Determinar la URL y el nuevo texto del toggle
    let url: string;
    let newText: string;
    if (this.toggleText === 'Mascotas') {
      url = '/cliente/all';
      newText = 'Clientes';
    } else {
      url = '/mascota/all';
      newText = 'Mascotas';
    }

    // Redirigir a la nueva URL y actualizar el texto del toggle
    this.router.navigateByUrl(url);
    this.toggleText = newText;
}


buscarMascotas() {
  if (this.searchTerm.trim() !== '') {
    this.listaMascotas = this.listaMascotas.filter(mascota =>
      mascota.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) );
  } else {
    // Si el término de búsqueda está vacío, restaura la lista original
    this.mascotaService.findAll().subscribe(
      clientes => this.listaMascotas = clientes,
      error => console.error(error)
    );
  }
}

  
  
  
  
}