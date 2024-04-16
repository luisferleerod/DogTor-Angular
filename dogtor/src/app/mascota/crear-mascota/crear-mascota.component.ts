import { Component, EventEmitter, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/cliente/cliente';
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent {

  @Output()
  addMascotaEvent = new EventEmitter<mascota>();

  listMascotas!: mascota[]

  sendMascota!: mascota;

  constructor( private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService) { }

  formMascota: mascota = {
   
    id: 0,
    nombre: "", 
    raza: "",
    edad: 0,
    peso: 0 ,
    enfermedad: "",
    estado: "activo",
    foto: "",
  };

  formClient: Cliente={

    id:0,
    cedula: "",
    nombre: "",
    correo: "",
    celular: "",

  }

  sendClient: Cliente = {
    id:0,
    cedula: "",
    nombre: "",
    correo: "",
    celular: "",
  }


  addMascotaForm() {

    
    console.log(this.formClient.cedula)
    this.clienteService.findByCedula(this.formClient.cedula).subscribe((cliente: Cliente) => {

      console.log("ESTAMOS PROBANDO QUE CREAR UNA AMSSCOTA FUNCIONE")
      console.log(cliente.nombre)
      this.sendClient = Object.assign({}, cliente);
      console.log(this.sendClient.cedula)

      this.sendMascota = Object.assign({}, this.formMascota);
      this.sendMascota.cliente=this.sendClient;
      console.log("VAMOS BIEN POR AHORA")
      console.log(this.sendClient.cedula)
      console.log(this.sendMascota.cliente.cedula)
    
      this.mascotaService.findAll().subscribe((mascotas: mascota[]) => {
        this.listMascotas = mascotas;
    
        console.log("RECIBIENDO MASCOTA DEL FORMULARIO")
        console.log(this.sendMascota.nombre)
        console.log(this.sendMascota.cliente?.cedula)
        
        console.log(this.listMascotas.length)
        this.sendMascota.id = this.listMascotas.length + 1;
    
        // this.addMascotaEvent.emit(this.sendMascota);
    
        this.mascotaService.agregarMascota(this.sendMascota);
  
        this.mostrarAlerta();
      });
      
    })

  }
  
  mostrarAlerta(){
    Swal.fire({
      title: 'MASCOTA REGISTRADA',
      text: 'Mascota registrada exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/mascota/all']);
      }
    });

    
  }
}
