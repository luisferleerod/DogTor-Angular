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

  updateMascota() {

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
      
  
  
      this.mascotaService.actualizarMascota(this.sendMascota);
  
      this.mostrarAlerta();
      
    })
    

   
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
