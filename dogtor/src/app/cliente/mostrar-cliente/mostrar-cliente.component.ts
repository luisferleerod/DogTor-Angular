import { Component, Input } from '@angular/core';
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
export class MostrarClienteComponent {
  @Input()
  cliente!: Cliente;

  idCliente!: number;

  mascotas: mascota [] = [];
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router, private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));

      this.clienteService.findByCedula(id).subscribe((cliente) => {
        this.cliente = cliente;
        this.idCliente = cliente.id;

        // Ahora que tienes el ID del cliente, puedes realizar cualquier otra operación que necesite este ID, como buscar sus mascotas
        this.clienteService.findMascotas(this.idCliente).subscribe((mascotas) => {
          this.mascotas = mascotas;

          // Verificar si hay mascotas antes de acceder a sus propiedades
          if (this.mascotas.length > 0) {
            console.log("MASCOTAS DESDE MOSTRAR CLIENTE");
            console.log(this.mascotas[0].nombre);
            console.log(this.mascotas[0].id);

            
          }
        });
      });
    });
  }
}