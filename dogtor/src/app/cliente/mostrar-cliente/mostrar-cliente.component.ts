import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mascota } from 'src/app/mascota/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

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
    this.clienteService.clienteHome().subscribe(
      (data) => {
        this.cliente = data;
        this.cargarMascotas();
      },
      (error) => {
        console.error("Error fetching client details", error);
      }
    );
  }

  cargarMascotas(): void {
    if (this.cliente && this.cliente.id) {
      this.clienteService.findMascotas(this.cliente.id).subscribe(
        (mascotas) => {
          this.mascotas = mascotas;
        },
        (error) => {
          console.error("Error fetching pets", error);
        }
      );
    }
  }
}
