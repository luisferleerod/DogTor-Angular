import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mascota } from 'src/app/mascota/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent implements OnInit {
  cliente!: Cliente;
  mascotas: mascota[] = [];

  constructor(
    private clienteService: ClienteService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.clienteService.clienteHome().pipe(
      tap(data => {
        console.log("\n\nFetching client details", data);
        this.cliente = data;
        this.cargarMascotas();
      }),
      catchError(error => {
        console.error("Error fetching client details", error);
        return of(null); // Retorna un observable con valor null en caso de error
      })
    ).subscribe();
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
