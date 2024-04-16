import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/cliente/cliente';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent {
  //@Input() 
  formMascota!: mascota;

  cliente!: Cliente

  formClient!: Cliente
  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {
  }
  //constructor(private mascotaService: MascotaService) { }
  //updateMascotaEvent = new EventEmitter<mascota>()
  
  sendMascota!: mascota
  sendClient!: Cliente


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.mascotaService.findById(id).subscribe((mascota: mascota) => {
        this.formMascota = Object.assign({}, mascota);

        console.log("RECIBIENDO MASCOTA DESDE ACTUALIZAR MASCOTA 11111111111111111111")

        this.mascotaService.findCliente(id).subscribe((cliente) => {
           this.formMascota.cliente = cliente;
           this.formClient = Object.assign({}, this.formMascota.cliente);

           console.log("RECIBIENDO CLIENTE DESDE ACTUALIZAR MASCOTA COMPONENT")
           console.log(this.formClient.cedula)
           
       })
      });
    
      
  });
}
  updateMascota() {

    this.clienteService.findByCedula(this.formClient.cedula).subscribe((cliente: Cliente) => {

      this.sendClient = Object.assign({}, cliente);
      
    })
    
    this.sendMascota = Object.assign({}, this.formMascota);
    this.sendMascota.cliente=this.sendClient;
    console.log("-------------------------------")
    console.log(this.sendClient.cedula)
    console.log(this.sendMascota.cliente.cedula)


    this.mascotaService.actualizarMascota(this.sendMascota);
    console.log("MANDANDO MASCOTA DESDE ACTUALIZAR MASCOTA COMPONENT"+this.sendMascota)
    console.log(this.sendMascota.id)
    console.log(this.sendMascota.nombre)
    console.log(this.sendMascota.enfermedad)
    console.log(this.sendMascota.estado)
    console.log(this.sendMascota.cliente?.cedula)
    this.mostrarAlerta();
   
  }

  mostrarAlerta(){
    Swal.fire({
      title: 'MASCOTA ACTUALIZADA',
      text: 'Mascota actualizada exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/mascota/all']);
      }
    });

  }
}
