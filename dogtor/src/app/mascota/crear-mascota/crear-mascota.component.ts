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
    celular: 0,

  }

  sendClient: Cliente = {
    id:0,
    cedula: "",
    nombre: "",
    correo: "",
    celular: 0
  }


  camposLlenos(): boolean {

    return this.formMascota.nombre !== '' && 
           this.formMascota.raza !== '' &&
           this.formMascota.edad !== 0 &&
           this.formMascota.peso !== 0 &&
           this.formMascota.foto !== '' &&
           this.formMascota.enfermedad !== '' &&
           this.formClient.cedula !== '' &&
           this.formMascota.estado !== '' 
  
  }

  
  validarLink(link: string): boolean {
    const regex: RegExp = /^(http|https):\/\/[^ "]+$/;
    return regex.test(link);
  }

  addMascotaForm() {

    if (!this.validarLink(this.formMascota.foto)) {
      // Mostrar un mensaje de error si el correo electrónico no es válido
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un enlace  válido',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return; // Salir del método si el correo electrónico no es válido
    }
    

    this.clienteService.findByCedula(this.formClient.cedula).subscribe((cliente: Cliente) => {

      if(cliente == null){
        Swal.fire({
          title: 'Error',
          text: 'Por favor ingrese una cedula válida',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return; 
      }
     
      this.sendClient = Object.assign({}, cliente);
     

      this.sendMascota = Object.assign({}, this.formMascota);
      this.sendMascota.cliente=this.sendClient;

    
      this.mascotaService.findAll().subscribe((mascotas: mascota[]) => {
        this.listMascotas = mascotas;
    
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
