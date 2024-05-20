import { Component } from '@angular/core';
import { administrador } from '../administrador';
import { droga } from 'src/app/droga/droga';
import { DrogaService } from 'src/app/service/droga.service';
import { veterinario } from 'src/app/veterinario/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { mascota }
 from 'src/app/mascota/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { AdministradorService } from 'src/app/service/administrador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  listaadmin!: administrador[]
  listaDrogas!: droga[];
  admin!: administrador
  drogasMasVendidas: droga[] = []; // Array para almacenar las drogas más vendidas
  totalVentas: number = 0;
  // Variables para almacenar la cantidad de veterinarios y mascotas
  cantidadVeterinariosActivos: number = 0;
  cantidadVeterinariosInactivos: number = 0;
  cantidadMascotasActivas: number = 0;
  cantidadMascotasTotales: number = 0;

  constructor(
    private administradorService: AdministradorService,
    private drogaService: DrogaService, // Agrega el servicio de droga
    private veterinarioService: VeterinarioService, // Agrega el servicio de veterinario
    private mascotaService: MascotaService, // Agrega el servicio de mascota
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el administrador
    console.log('Obteniendo el administrador...');
    this.administradorService.adminHome().subscribe((data) => {
      //this.listaadmin = data;
      //this.admin = this.listaadmin[0];
      this.admin = data;
    });

    // Obtener la lista de drogas
    this.drogaService.findAll().subscribe((drogas) => {
      console.log('Drogas obtenidas:', drogas); // Agregar este console.log()
      this.listaDrogas = drogas;
      // Llamar al método para obtener las drogas más vendidas
      this.obtenerMasVendidas();
      this.obtenerTotalVentas();
    });

    // Obtener la cantidad de veterinarios activos e inactivos
    this.veterinarioService.findAll().subscribe((veterinarios) => {
      this.cantidadVeterinariosActivos = veterinarios.filter(veterinario => veterinario.estado === 'activo').length;
      this.cantidadVeterinariosInactivos = veterinarios.filter(veterinario => veterinario.estado === 'inactivo').length;
    });

    // Obtener la cantidad de mascotas activas e inactivas
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.cantidadMascotasActivas = mascotas.filter(mascota => mascota.estado === 'activo').length;
      this.cantidadMascotasTotales = mascotas.length;
    });
  }

  obtenerMasVendidas(): void {
    // Llamar al método para obtener las drogas más vendidas
    this.drogaService.masVendidas().subscribe((drogas) => {
      this.drogasMasVendidas = drogas;
      console.log("ARREGLO DE DROGAS"+this.drogasMasVendidas);
    })
    
    
  }

  obtenerTotalVentas(): void {
    // Llamar al método para obtener el total de ventas
    this.drogaService.totalVentas().subscribe((total) => {
      this.totalVentas = total;
      console.log("Total de ventas:", total);
    })
  }
  
  obtenerTotalGanancias(): number {
    // Llamar al método para obtener el total de ganancia
    let totalGanancias = 0;
    for (const droga of this.listaDrogas) {
      totalGanancias += droga.unidadesVendidas * droga.precioVenta;
    }
    console.log("Total de ganancias:", totalGanancias);
    return totalGanancias;
  }
  
}
