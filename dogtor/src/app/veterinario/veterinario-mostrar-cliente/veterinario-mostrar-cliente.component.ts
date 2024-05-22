import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mascota } from 'src/app/mascota/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-veterinario-mostrar-cliente',
  templateUrl: './veterinario-mostrar-cliente.component.html',
  styleUrls: ['./veterinario-mostrar-cliente.component.css']
})

export class VeterinarioMostrarClienteComponent {
  cliente!: Cliente;
    mascotas: mascota[] = [];
  
    constructor(
      private clienteService: ClienteService, 
      private route: ActivatedRoute, 
      private router: Router, 
      private mascotaService: MascotaService
    ) {}
  
  
    ngOnInit(): void {

     this.route.paramMap.subscribe(params => {
          const id = String(params.get('id'));
          this.clienteService.findByCedula(id).subscribe((cliente) => {
            this.cliente = cliente;
            this.cargarMascotas();
          })
     })
    }
  
    cargarMascotas(): void {
      if (this.cliente && this.cliente.id) {
        this.clienteService.findMascotas(this.cliente.id).pipe(
          tap(mascotas => {
            this.mascotas = mascotas;
          }),
          catchError(error => {
            console.error("Error fetching pets", error);
            return of([]); // Retorna un observable con una lista vacía en caso de error
          })
        ).subscribe();
      }
    }
  }
  