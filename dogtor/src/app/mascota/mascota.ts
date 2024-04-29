import { Cliente } from "../cliente/cliente";
import { tratamiento } from "../tratamiento/tratamiento";

export interface mascota {
    id: number;
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    enfermedad: string;
    estado: string;
    foto: string;
    cliente?: Cliente;
    tratamiento?:tratamiento[];

}