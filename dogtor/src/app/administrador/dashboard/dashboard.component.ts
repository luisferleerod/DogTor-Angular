import { Component } from '@angular/core';
import { administrador } from '../administrador';
import { droga } from 'src/app/droga/droga';
import { DrogaService } from 'src/app/service/droga.service';
import { veterinario } from 'src/app/veterinario/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { mascota } from 'src/app/mascota/mascota';
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
    this.administradorService.getAdmin().subscribe((admin) => {
      this.listaadmin = admin;
      this.admin = this.listaadmin[0];
    });

    // Obtener la lista de drogas
    this.drogaService.findAll().subscribe((drogas) => {
      console.log('Drogas obtenidas:', drogas); // Agregar este console.log()
      this.listaDrogas = drogas;
      // Llamar al método para obtener las drogas más vendidas
      this.obtenerMasVendidas();
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
    // Ordenar la lista de drogas por unidades vendidas de forma descendente
    const drogasOrdenadas = this.listaDrogas.slice().sort((a, b) => b.unidadesVendidas - a.unidadesVendidas);
    
    // Obtener las tres primeras drogas de la lista ordenada
    this.drogasMasVendidas = drogasOrdenadas.slice(0, 3);
  }

  obtenerTotalVentas(): number {
    let totalVentas = 0;
    for (const droga of this.listaDrogas) {
      totalVentas += droga.unidadesVendidas;
    }
    console.log("Total de ventas:", totalVentas);
    return totalVentas;
  }
  
  obtenerTotalGanancias(): number {
    let totalGanancias = 0;
    for (const droga of this.listaDrogas) {
      totalGanancias += droga.unidadesVendidas * droga.precioVenta;
    }
    console.log("Total de ganancias:", totalGanancias);
    return totalGanancias;
  }
  
}
