import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {

  formCliente!: Cliente;
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  sendCliente!: Cliente
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.clienteService.findByCedula(id).subscribe((cliente: Cliente) => {
        this.formCliente = Object.assign({}, cliente);
      });
    });
  }

  updateCliente() {
    this.sendCliente = Object.assign({}, this.formCliente);
    this.clienteService.actualizarCliente(this.sendCliente);
    this.router.navigate(['/cliente/all']);
  }
}
